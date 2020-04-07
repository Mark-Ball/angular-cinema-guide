// e.g. 'The Dark Knight' to 'the-dark-knight'
export const transformName = (name: string): string => (
	name.toLowerCase().split(' ').join('-')
)

// e.g. 'the-dark-knight.jpg' to '/assets/images/the-dark-knight-jpg'
export const createImagePath = (name: string): string => (
	'assets/images/' + name
)