import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import * as ipfsAPI from "ipfs-api"
import {Buffer} from "buffer"

@Injectable()
export class AppIpfsService {
	ipfs: any;

	constructor() {
		this.ipfs = ipfsAPI(environment.IPFSHost, environment.IPFSPort, {protocol: 'http'});
	}

	get(multihash: string): Observable<any> {
		return Observable.create(observer => {
			this.ipfs.files.get(multihash, function (err, files) {
				if (err) {
					observer.error(err);
				} else {
					files.forEach((file) => {
						observer.next(file);
					})
				}
			})
		});
	}

	add(fileToUpload: File): Observable<any> {
		return Observable.create(observer => {
			let that = this;
			let reader: FileReader = new FileReader();
			reader.onloadend = function (e) {
				const files = [
					{
						path: fileToUpload.name,
						content: Buffer.from(reader.result)
					}
				];
				that.ipfs.files.add(files, (err, res) => {
					if (err) {
						observer.error(err);
					} else {
						for (let i = 0; i < res.length; i++) {
							observer.next(res[i]);
						}
						observer.complete();
					}
				});
			};

			reader.readAsArrayBuffer(fileToUpload);
		});
	}
}

