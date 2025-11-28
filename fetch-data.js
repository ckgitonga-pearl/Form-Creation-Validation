// Initialize the async function
async function fetchUserData() {

    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Get the data container
    const dataContainer = document.getElementById('api-data');

    // Fetch data using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Invoke fetchUserData after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});
