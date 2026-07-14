import { fetchWithAuth } from './fetchWithAuth'

const API_URL = 'https://orel-insider-api.onrender.com'

export interface User {
	_id: string
	name: string
	email: string
	createdAt: string
	updatedAt: string
}

export interface CreateUserDto {
	name: string
	email: string
	password: string
	recaptchaToken: string // 👈 ДОБАВЬ
}

export interface LoginDto {
	email: string
	password: string
}

export interface LoginResponse {
	message: string
	user: User
}

export const api = {
	// Регистрация (БЕЗ автообновления - не нужен токен)
	async register(data: CreateUserDto): Promise<User> {
		const res = await fetch(`${API_URL}/users`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(data),
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Registration failed')
		}

		return res.json()
	},

	// Вход (БЕЗ автообновления - получаем токены)
	async login(data: LoginDto): Promise<LoginResponse> {
		const res = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(data),
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Login failed')
		}

		return res.json()
	},

	// Обновление токена (БЕЗ автообновления - это и есть обновление!)
	async refreshToken(): Promise<{ message: string }> {
		const res = await fetch(`${API_URL}/auth/refresh`, {
			method: 'POST',
			credentials: 'include',
		})

		if (!res.ok) {
			throw new Error('Refresh failed')
		}

		return res.json()
	},

	// 👇 ВСЁ ОСТАЛЬНОЕ - С АВТООБНОВЛЕНИЕМ!

	// Выход
	async logout(): Promise<{ message: string }> {
		const res = await fetchWithAuth(`${API_URL}/auth/logout`, {
			method: 'POST',
		})

		if (!res.ok) {
			throw new Error('Logout failed')
		}

		return res.json()
	},

	// Получить текущего пользователя
	async getCurrentUser(): Promise<User> {
		const res = await fetchWithAuth(`${API_URL}/users/me`)

		if (!res.ok) {
			throw new Error('Not authenticated')
		}

		return res.json()
	},

	// Получить всех пользователей
	async getUsers(): Promise<User[]> {
		const res = await fetchWithAuth(`${API_URL}/users`)

		if (!res.ok) {
			throw new Error('Failed to fetch users')
		}

		return res.json()
	},

	// Получить пользователя по ID
	async getUserById(id: string): Promise<User> {
		const res = await fetchWithAuth(`${API_URL}/users/${id}`)

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'User not found')
		}

		return res.json()
	},

	// Обновить пользователя
	async updateUser(
		id: string,
		data: { name?: string; email?: string; password?: string },
	): Promise<User> {
		const res = await fetchWithAuth(`${API_URL}/users/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Update failed')
		}

		return res.json()
	},

	// Удалить пользователя
	async deleteUser(id: string): Promise<User> {
		const res = await fetchWithAuth(`${API_URL}/users/${id}`, {
			method: 'DELETE',
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Delete failed')
		}

		return res.json()
	},

	// Запрос сброса пароля (БЕЗ автообновления - не нужен токен)
	async forgotPassword(
		email: string,
	): Promise<{ message: string; token?: string }> {
		const res = await fetch(`${API_URL}/auth/forgot-password`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email }),
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Request failed')
		}

		return res.json()
	},

	// Сброс пароля по токену (БЕЗ автообновления - не нужен JWT)
	async resetPassword(
		token: string,
		password: string,
	): Promise<{ message: string }> {
		const res = await fetch(`${API_URL}/auth/reset-password`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token, password }),
		})

		if (!res.ok) {
			const error = await res.json()
			throw new Error(error.message || 'Reset failed')
		}

		return res.json()
	},
}
