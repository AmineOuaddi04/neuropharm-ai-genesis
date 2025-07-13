export interface User {
  id: string;
  email: string;
  role: 'patient' | 'medical';
  firstName: string;
  lastName: string;
  institutionId?: string;
  permissions?: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Mock authentication - replace with real API calls
export const authService = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user based on email pattern
    const isMedical = email.includes('med') || email.includes('doctor');
    
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      role: isMedical ? 'medical' : 'patient',
      firstName: isMedical ? 'Dr. John' : 'Jane',
      lastName: isMedical ? 'Smith' : 'Doe',
      institutionId: isMedical ? 'hospital-001' : undefined,
      permissions: isMedical ? ['read_patients', 'write_prescriptions', 'approve_treatments'] : ['read_own_data', 'upload_genetic_data']
    };
    
    const token = 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9);
    
    return { user, token };
  },

  async logout(): Promise<void> {
    // Clear local storage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (!token || !userData) return null;
    
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  },

  saveAuthData(user: User, token: string): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(user));
  }
};