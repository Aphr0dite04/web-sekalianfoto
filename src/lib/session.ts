
'use client'
export type User = { name: string, email?: string }
const KEY = "sf_user"
export function setUser(u: User){ localStorage.setItem(KEY, JSON.stringify(u)) }
export function getUser(): User | null { try { return JSON.parse(localStorage.getItem(KEY) || "null") } catch { return null } }
export function signOut(){ localStorage.removeItem(KEY); window.location.href = "/" }
