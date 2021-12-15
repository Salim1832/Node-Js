const getUser = async () => {
    const container = document.querySelector(".result");
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();


    users.forEach((user) => (container.innerHTML += `<p>${user.name}</p>`));
};

getUser();

 