import { CONSTANTS } from '../constants';

export const movies = [
	{
		name: 'The Dark Knight',
		image: 'the-dark-knight.jpg',
		description: "The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman",
		cinemas: [
			{ 
				name: CONSTANTS.HOYTS_CHATSWOOD,
				times: ['9:00', '11:00', '17:00']
			},
			{
				name: CONSTANTS.EVENT_GEORGEST,
				times: ['10:00', '13:00', '16:00', '19:00']
			},
			{ 
				name: CONSTANTS.EVENT_HORNSBY,
				times: ['15:00', '20:00', '22:00']
			}
		]
	},
	{
		name: 'The Thing',
		image: 'the-thing.jpg',
		description: "The Thing is a 2011 science fiction horror film directed by Matthijs van Heijningen Jr., written by Eric Heisserer, and starring Mary Elizabeth Winstead, Joel Edgerton, Ulrich Thomsen, Adewale Akinnuoye-Agbaje, and Eric Christian Olsen. It is a prequel to the 1982 film of the same name by John Carpenter, which was an adaptation of the 1938 novella Who Goes There? by John W. Campbell. It tells the story of a team of Norwegian and American scientists who discover a parasitic alien buried deep in the ice of Antarctica, realizing too late that it is still alive.",
		cinemas: [
			{
				name: CONSTANTS.HOYTS_CHATSWOOD,
				times: ['10:00', '18:00', '19:00', '20:00', '21:00']
			},
			{
				name: CONSTANTS.EVENT_HORNSBY,
				times: ['12:00', '20:00', '22:00']
			}
		]
	},
	{
		name: 'John Wick',
		image: 'john-wick.jpg',
		description: "John Wick is an American action thriller media franchise created by Derek Kolstad and owned by Summit Entertainment. Keanu Reeves plays John Wick, a retired hitman seeking vengeance for the killing of the dog given to him by his recently-deceased wife.",
		cinemas: [
			{
				name: CONSTANTS.HOYTS_CHATSWOOD,
				times: ['12:00', '18:00', '21:00']
			}
		]
	}
];