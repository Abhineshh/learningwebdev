let obj2 = {
    name : "ding",
    money : 1000,
    [Symbol.toPrimitive] (hint){
        console.log(`hint : ${hint}`);
        return hint == "string" ? `zoro`: this.money
    }
};

alert(obj2)
alert(+obj2)
alert(obj2 + 2000)