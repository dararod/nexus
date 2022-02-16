export type Avatar = {
	url: string;
	height: number;
	width: number;
};

export type User = {
	id: string;
	avatar: Avatar;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
};
