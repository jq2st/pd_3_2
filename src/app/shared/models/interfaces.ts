export interface AdminHistoryItem {
    _id: string,
    date: string,
    linkImgBefore: string,
    linkImgAfter: string
    type: string,
    size: string,
    info: string | null,
    user: User
}

export interface User {
    _id: string,
    name: string,
    password?: string, 
    role: 'USER' | 'ADMIN'
}