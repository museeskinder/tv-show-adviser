import axios from "axios";


/* basic promise example */
/*
function generateRandom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random().toFixed(2);
            if (random > 0.5) {
                resolve("Random number is greater than 0.5 and successful");
            } else {
                reject("Random number is less than 0.5 and failed");
            }
        }, 2000);
    });
}

generateRandom()
    .then((messageSuccess) => {
        console.log("Positive message from: " + messageSuccess);
    })
    .catch((messageFailure) => {
        console.log("Negative message from: " + messageFailure);
    });

*/

/* fetching data from an API use fetch with multimple then and catch */
/*
fetch("https://randomuser.me/api/").then(
    (response) => {
        response.json().then(
            (jsonResponse) => {
                console.log(jsonResponse);
            }
        ).catch(
            (error) => {
                console.log("Error in parsing JSON: " + error);
            }
        );
    }
).catch((error) => {
    console.log("Error in fetching data: " + error);
});

*/

/* fetching data from an API using axios */
/*
axios("https://randomuser.me/api/").then((jsonResponse) => {
    console.log(jsonResponse.data);
}).catch(
    (error) => {
        console.log("Error in fetching data: " + error);
    }
);

*/

/* async await example */
/*
 async function test() {
    try {
      const result =  await axios("https://randomuser.me/api");
      console.log(result)
    }

    catch (err) {
      console.log("Error: " +err);
    }
  }

  test();
*/