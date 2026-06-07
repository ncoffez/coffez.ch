export interface DrawingEvent {
	id?: string
	title: string
	startDate: Date
	endDate?: Date
	description?: string
	coverImage?: string
	hidden?: boolean
}

export interface Portrait {
	id?: string
	name: string
	createdDate: Date
	urlFirebaseOriginal?: string
	urlFirebaseReduced?: string
	urlFirebaseOriginalWithQR?: string
	urlFirebaseWebp?: string
	urlFirebaseJpg?: string
	size?: string
	hidden?: boolean
	sourceApplication?: 'slack' | 'Apple Shortcuts'
	index?: number
	originalName?: string
	imageUrl?: string
	sourceType?: string
	thread?: string
	channel?: string
}

export interface Gallery {
	id?: string
	title: string
	description?: string
	coverImage?: string
}

export interface User {
	uid: string
	displayName?: string
	email?: string
	admin?: boolean
}

export type FirestoreDocument<T> = {
	[K in keyof T]: T[K]
}

export interface ApiError {
	status: number
	error: string
	details?: any
}

export type Environment = 'development' | 'production' | 'test'