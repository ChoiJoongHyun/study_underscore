/**
 * _.each(list, iteratee, [context]) Alias: forEach
 * 각 요소를 차례대로 iteratee 함수 로 반환.
 * */
function each() {
    let values = [1,2,3,4]; //[[1, 2], [3, 4]]
    _.each(values, function (values) {
        console.log(values);
    });
}

/**
 * _.map(list, iteratee, [context]) Alias: collect
 * iteratee 를 통해 각 요소의 목록을 새로운 값 리스트로 만든다.
 * */
function map() {
    let result_1 = _.map([1, 2, 3], function(num){ return num * 3; });
    console.log("result_1 : " + result_1);

    let result_2 = _.map({one: 1, two: 2, three: 3}, function(num){ return num * 3; });
    console.log("result_2 : " + result_2);

    let result_3 = _.map([[1, 2], [3, 4]], _.first);
    console.log("result_3 : " + result_3);
}

/**
 * _.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl
 * memo = 초기값 0 이된다.
 * 함수의 리턴값이 다음 memo 값이된다. 재귀함수형식으로 계속 반복됨.
 * */
function reduce() {
    let sum = _.reduce([10, 20, 30], function(memo, num){ console.log("memo : " + memo + ", num : " + num);  return memo + num; }, 0);
    console.log(sum);
}

/**
 * _.reduceRight(list, iteratee, [memo], [context]) Alias: foldr
 * 위 reduce 와 동일하나 오른쪽부터 진행
 * */
function reduceRight() {
    let list = [[0, 1], [2, 3], [4, 5]];
    let flat = _.reduceRight(list, function(memo, num) {
        console.log("memo : " + memo + ", num" + num);
        return memo.concat(num);
        }, []);
    console.log(flat);

    let sum = _.reduceRight([10, 20, 30], function(memo, num){ console.log("memo : " + memo + ", num : " + num);  return memo + num; }, 0);
    console.log(sum);
}

/**
 *_.find(list, predicate, [context]) Alias: detect
 * 조건에 맞는 첫번째 값을 반환, 통과하지 못하면 undefined 반환
 * */
function find() {
    let even = _.find([1, 2, 3, 4, 5, 6], function(num){ console.log(num); return num % 2 == 0; });
    console.log("result : " + even);
}

/**
 * _.filter(list, predicate, [context]) Alias: select
 * 조건에 맞는 값들을 리스트로 반환
 * */
function filter() {
    let evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    console.log("result : " + evens);
}

/**
 * _.where(list, properties)
 * 조건에 맞는 모든 properties 를 반환 (리스트)
 * */
function whaere() {
    let listOfPlays = [{title: "Cymbeline", author: "Shakespeare", year: 1613}, {title: "The Tempest", author: "Shakespeare", year: 1611}];
    let result = _.where(listOfPlays, {author: "Shakespeare", year: 1613});
    console.log("result : " + result[0].title);
}

/**
 * _.findWhere(list, properties)
 * 조건에 맞는 가장 첫번째 properties 를 반환 (맵)
 * */
function findWhere() {
    let listOfPlays = [{title: "Cymbeline", author: "Shakespeare", year: 1611}, {title: "The Tempest", author: "Shakespeare", year: 1611}];
    let result = _.findWhere(listOfPlays, {author: "Shakespeare", year: 1611});
    console.log("result : " + result.title);
}

/**
 * _.reject(list, predicate, [context])
 * 조건에 맞지 않는 값들을 리스트로 리턴, (filter 와 반대개념)
 * */
function reject() {
    let odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    console.log("result : " + odds);
}

/**
 * _.every(list, [predicate], [context]) Alias: all
 * 리스트중 조건이 모두 true 이면 true, 하나라도 조건이 안맞으면 false
 * */
function every() {
    let isEvery = _.every([2, 4, 5], function(num) { return num % 2 == 0; });
    console.log("result : " + isEvery);
}

/**
 * _.some(list, [predicate], [context]) Alias: any
 * 리스트중 하나라도 true 이면 true, 모두 false 이면 false
 * */
function some() {
    let isSome = _.some([null, 0, 'yes', false]);
    console.log("result : " + isSome);
}

/**
 * _.contains(list, value, [fromIndex]) Alias: includes
 * 값이 포함되어 있으면 true, 없으면 false
 * */
function contain() {
    let result = _.contains([1, 2, 3], 2, 0);
    console.log("result : " + result);
}

/**
 * _.invoke(list, methodName, *arguments)
 * 리스트에서 methodName 정의하여 사용
 * */
function invoke() {
    let result = _.invoke([[5, 1, 7], [3, 2, 1]], 'map', function(num){ return num * 3; });
    console.log("result : " + result);
    //_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
}

/**
 * _.pluck(list, propertyName)
 * 리스트에서 해당키값의 벨류들의 모음을 다시 리스트로 만든다.
 * */
function plucke() {
    let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let result = _.pluck(stooges, 'name');
    console.log("result : " + result);
}

/**
 * _.max(list, [iteratee], [context])
 * 리스트에서 가장 큰값 리턴
 * */
function max() {
    let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let result = _.max(stooges, function(stooge){ return stooge.age; });
    console.log("result : " + result.name);

    let numbers = [1,2,3,4,10,5];
    console.log("result : " + _.max(numbers));
}

/**
 * _.max(list, [iteratee], [context])
 * 리스트에서 가장 작은값 리턴
 * */
function min() {
    let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let result = _.min(stooges, function(stooge){ return stooge.age; });
    console.log("result : " + result.name);

    let numbers = [1,2,3,4,10,5];
    console.log("result : " + _.min(numbers));
}

/**
 * _.sortBy(list, iteratee, [context])
 * 정렬
 * */
function sortBy() {
    let result = _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.max(num); });
    console.log("result : " + result);

    let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let result_1 = _.sortBy(stooges, 'name');
    console.log("result : " + result_1[0].name);
}

/**
 * _.groupBy(list, iteratee, [context])
 * 리스트를 조건에 맞추어 맵 으로 리턴
 * */
function groupBy() {
    let a = new Set([1,2,3]);
    console.log("result : " + a.size);

    let result = _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
    //{1: [1.3], 2: [2.1, 2.4]}

    console.log("result : " + Object.keys(result));

    let result_1 =_.groupBy(['one', 'two', 'three'], 'length');
    //=> {3: ["one", "two"], 5: ["three"]}
    console.log("result : " + Object.keys(result_1));
}

/**
 * _.indexBy(list, iteratee, [context])
 * 특정키 값을 기준으로 groupBy 진행, key 는 고유하다. 중복불가
 * */
function indexBy() {
    let stooges = [{name: 'moe', age: 40}, {name: 'joonghyun', age: 40},{name: 'larry', age: 50}, {name: 'curly', age: 60, ageaaa: 60}];
    let result = _.indexBy(stooges, 'age');
    console.log("result : " + Object.keys(result));
/*=> {
        "40": {name: 'moe', age: 40},
        "50": {name: 'larry', age: 50},
        "60": {name: 'curly', age: 60}
    }*/
}

/**
 * _.countBy(list, iteratee, [context])
 * 조건에 맞은 개수 groupBy
 * */
function countBy() {
    let result = _.countBy([1, 2, 3, 4, 5], function(num) {
        return num % 2 == 0 ? 'even': 'odd';
    });
    console.log("result : " + Object.keys(result));
//=> {odd: 3, even: 2}
/*return num % 2 == 0; 일경우 false:3, true:2*/
}

/**
 * _.shuffle(list)
 * 리스트를 섞어 반환
 * */
function shuffle() {
    let result= _.shuffle([1, 2, 3, 4, 5, 6]);
    console.log("result : " + result);
//=> [4, 1, 6, 3, 5, 2]
}

/**
 * _.sample(list, [n])
 * 랜덤 추출
 * */
function sample() {
    let result=_.sample([1, 2, 3, 4, 5, 6]);
    console.log("result : " + result);
//=> 4

    let result_1=_.sample([1, 2, 3, 4, 5, 6], 3);
    console.log("result : " + result_1);
//=> [1, 6, 2]
}

/**
 * _.toArray(list)
 * arguments -> array 변환
 * */
function toArray() {
    let result = (function(){
        return _.toArray(arguments).slice(2);
    })(1, 2, 3, 4);
    console.log("result : " + result);
}

/**
 * _.size(list)
 * size 반환
 * */
function size() {
    let result = _.size({one: 1, two: 2, three: 3});
    console.log("result : " + result);
}

/**
 * _.partition(array, predicate)
 * 리스트를 조건에 맞추어 나눈다.
 * */
function partition() {
    let result = _.partition([0, 1, 2, 3, 4, 5], function (num) {
        return num > 3;
    });

    console.log("result : " + result);
}

