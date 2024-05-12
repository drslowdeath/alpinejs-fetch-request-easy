// you need to have this in order for alpine to work. As alpine loads last it needs to be wrapped in this event listener. All alpine logic neeeds to be here 

document.addEventListener('alpine:init', () => {
    console.log("Alpine loaded")
    Alpine.data('counter', () => ({
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }));
    // Makes a json fetch request to a public api 
    Alpine.data('users', () => ({
        users:[],
        async init() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            this.users = await response.json();
        }
    }))
});

