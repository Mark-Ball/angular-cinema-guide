// e.g. 'The Dark Knight' to 'the-dark-knight'
export const transformName = (name: string): string => (
	name.toLowerCase().split(' ').join('-')
)