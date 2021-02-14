export interface CommentProps {
	id: number;
	author: String;
	text: string;
	likes: number;
}

export interface PostProps {
	id: number;
	author: String;
	img: number[];
	text: string;
	likes: number;
	liked?: boolean;
	comments?: CommentProps[];
}

const PWD = "../assets/img/";

export const posts: PostProps[] = [
	{
		id: 0,
		author: "beatriz_e_girl",
		img: [
			require(`${PWD}img-0.jpg`),
			require(`${PWD}img-1.jpg`),
			require(`${PWD}img-2.jpg`),
		],
		text: "Me tornei uma e-girl",
		likes: 0,
	},
	{
		id: 1,
		author: "vascaino_sofredor",
		img: [require(`${PWD}img-3.jpg`)],
		text: "VASCAO PORRA. HOJE TEM GOL DO RIBAMAR, RIBAMAR!!!!",
		likes: 3,
	},
	{
		id: 2,
		author: "zuleica",
		img: [require(`${PWD}img-4.jpg`), require(`${PWD}img-5.jpg`)],
		text: "Olhem essas fotos que tirei do meu quintal... que lindo",
		likes: 1,
	},
];
