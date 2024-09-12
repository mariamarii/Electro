export const register = (userData) => (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        // Get the list of users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]'); // Default to an empty array if null
  
        // Check if the username is already taken
        const userExists = users.find((user) => user.username === userData.username);
        if (userExists) {
          alert('Username already exists. Please choose another.');
          reject(); // Reject the promise if the username is taken
          return;
        }
  
        // Add the new user to the users array
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
  
        // Dispatch register action
        dispatch({ type: 'REGISTER', payload: userData });
  
        resolve(); // Resolve the promise on successful registration
      } catch (error) {
        console.error('Registration error:', error);
        reject(); // Reject the promise on error
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
        resolve(); // Resolve the promise on successful login
      } else if (storedUser) {
        alert('Invalid password');
        reject(); // Reject the promise on invalid password
      } else {
        alert('User not found');
        reject(); // Reject the promise on user not found
      }
    });
  };
  // authActions.js
export const logout = () => (dispatch) => {
    try {
      // Clear user data from localStorage
      localStorage.removeItem('user');
  
      // Dispatch logout action
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  