

interface FooApi {
    getFoo(): Promise<String>;
}


class FakeFooApi implements FooApi {
    private foo = "Foo loaded properly";

    async getFoo(): Promise<String> {
        const d = new Date()

        await sleep(6000)
        return Promise.resolve(this.foo);
    }
}

class HTTPFooApi implements FooApi {
    getFoo(): Promise<String> {
        return fetch("https://localhost:8080/foos/1")
            .then((res) => res.json())
            .then((res) => res as String);
    }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));



// Decide here which implementation of FooApi you want to use.
export const fooApi: FooApi = new FakeFooApi()