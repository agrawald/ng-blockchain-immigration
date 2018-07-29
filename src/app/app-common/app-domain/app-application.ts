import {VisaEntity} from "./app-visa";
import {ArtifactEntity} from "./app-artifact";

export class ApplicationEntity {
	public visa: VisaEntity;
	public artifacts: ArtifactEntity[] = [];
	public address: string;
	public status: boolean;
	public owner: string;
	public fee: string;
	public isActive: boolean = false;
}
