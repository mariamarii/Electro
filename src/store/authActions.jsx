export const register = (userData) => (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        const users = JSON.parse(localStorage.getItem('users') || '[]'); 
  
        const userExists = users.find((user) => user.username === userData.username);
        if (userExists) {
          alert('Username already exists. Please choose another.');
          reject(); 
          return;
        }
  
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
  
        dispatch({ type: 'REGISTER', payload: userData });
  
        resolve(); 
      } catch (error) {
        console.error('Registration error:', error);
        reject(); 
      }
    });
  };
  
  export const login = (userData) => (dispatch) => {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const storedUser = users.find((user) => user.username === userData.username);
  
      if (storedUser && storedUser.password === userData.password) {
        localStorage.setItem('user', JSON.stringify(storedUser));
        dispatch({ type: 'LOGIN', payload: storedUser });
        resolve(); 
      } else if (storedUser) {
        alert('Invalid password');
        reject(); 
      } else {
        alert('User not found');
        reject();
      }
    });
  };
export const logout = () => (dispatch) => {
    try {
      localStorage.removeItem('user');
  
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  
  