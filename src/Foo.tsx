import {useEffect, useState} from "react";
import {fooApi} from "./api/foo";

export default function Foo() {
    let [foo, setFoo] = useState<String | null>(null)

    useEffect(() => {
        fooApi.getFoo().then(setFoo);
    })

    return (
        <h1>{foo ?? "FOO NOT LOADED YET ZZzzZZ"}</h1>
    );
}