let user={
    role:'user'
};

let body={
    username:"akash",
    password:12345
}

user={...user,...body};

console.log(user);