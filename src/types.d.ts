export interface Avenger {
	id: string;
	name: string;
	age: number;
	powerScore: number;
	wonBattles: number;
	battle: (win: boolean) => void;
}
