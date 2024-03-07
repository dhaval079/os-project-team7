function runScheduler() {
    const queueUpdation = (queue, timer, arrival, n, maxProccessIndex) => {
        let zeroIndex;
        for (let i = 0; i < n; i++) {
            if (queue[i] === 0) {
                zeroIndex = i;
                break;
            }
        }
        queue[zeroIndex] = maxProccessIndex + 1;
    }

    const queueMaintainence = (queue, n) => {
        for (let i = 0; (i < n - 1) && (queue[i + 1] !== 0); i++) {
            let temp = queue[i];
            queue[i] = queue[i + 1];
            queue[i + 1] = temp;
        }
    }

    const checkNewArrival = (timer, arrival, n, maxProccessIndex, queue) => {
        if (timer <= arrival[n - 1]) {
            let newArrival = false;
            for (let j = (maxProccessIndex + 1); j < n; j++) {
                if (arrival[j] <= timer) {
                    if (maxProccessIndex < j) {
                        maxProccessIndex = j;
                        newArrival = true;
                    }
                }
            }
            //adds the incoming process to the ready queue
            //(if any arrives)
            if (newArrival)
                queueUpdation(queue, timer, arrival, n, maxProccessIndex);
        }
    }

//Driver Code
    let n = 4;
    let tq = parseInt(document.getElementById("tq").value);
    let timer = 0;
    let maxProccessIndex = 0;
    let avgWait = 0;
    const wait = [];
    const turn = [];
    const queue = [];
    const temp_burst = [];
    const complete = [];

    let a1 = parseInt(document.getElementById("a1").value);
    console.log(a1, typeof(a1))
    let a2 = parseInt(document.getElementById("a2").value);
    let a3 = parseInt(document.getElementById("a3").value);
    let a4 = parseInt(document.getElementById("a4").value);
    let b1 = parseInt(document.getElementById("b1").value);
    let b2 = parseInt(document.getElementById("b2").value);
    let b3 = parseInt(document.getElementById("b3").value);
    let b4 = parseInt(document.getElementById("b4").value);

    const arrival = [a1, a2, a3, a4];
   const burst = [b1, b2, b3, b4];
   console.log(arrival)
    console.log(burst)
    const ct = [];


for (let i = 0; i < n; i++) {
    temp_burst[i] = burst[i];
}

for (let i = 0; i < n; i++) { //Initializing the queue and complete array
    complete[i] = false;
    queue[i] = 0;
}
while (timer < arrival[0]) //Incrementing Timer until the first process arrives
    timer++;
queue[0] = 1;

while (true) {
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (temp_burst[i] !== 0) {
            flag = false;
            break;
        }
    }
    if (flag)
        break;

    for (let i = 0; (i < n) && (queue[i] !== 0); i++) {
        let ctr = 0;
        while ((ctr < tq) && (temp_burst[queue[0] - 1] > 0)) {
            temp_burst[queue[0] - 1] -= 1;
            timer += 1;
            ctr++;

            // Checking and Updating the ready queue until all the processes arrive
            checkNewArrival(timer, arrival, n, maxProccessIndex, queue);
        }
        // If a process is completed then store its exit time
        // and mark it as completed
        if ((temp_burst[queue[0] - 1] === 0) && (complete[queue[0] - 1] === false)) {
            //turn array currently stores the completion time
            turn[queue[0] - 1] = timer;
            complete[queue[0] - 1] = true;
        }

        // checks whether or not CPU is idle
        let idle = true;
        if (queue[n - 1] === 0) {
            for (let i = 0; i < n && queue[i] !== 0; i++) {
                if (complete[queue[i] - 1] === false) {
                    idle = false;
                }
            }
        } else
            idle = false;

        if (idle) {
            timer++;
            checkNewArrival(timer, arrival, n, maxProccessIndex, queue);
        }

        //Maintaining the entries of processes
        //after each premption in the ready Queue
        queueMaintainence(queue, n);
    }
}

for (let i = 0; i < n; i++) {
    turn[i] = turn[i] - arrival[i];
    wait[i] = turn[i] - burst[i];
}
for (let i =0;i<n;i++) {
    ct[i] = arrival[i] + turn[i];
}
console.log(`Time Quanta : ${tq}`);
console.log(`Number of Processes : ${n}`);
console.log(`Arrival Time of Processes : ${arrival}`);
console.log(`Burst Time of Processes : ${burst}`);
console.log("\nProgram No.\tArrival Time\tBurst Time\tWait Time\tTurnAround Time\n");
for (let i = 0; i < n; i++) {
    console.log(`${i + 1}\t\t\t ${arrival[i]}\t\t\t ${burst[i]}\t\t\t\t ${wait[i]} \t\t\t\t ${turn[i]} \n`);
}
// for (let i = 0; i < n; i++) {
//     avgWait += wait[i];
//     avgTT += turn[i];
// }
// console.log(`\nAverage wait time : ${avgWait / n}`);
// console.log(`\nAverage Turn Around Time : ${avgTT / n}`);
for (let i =0;i<n;i++) {
    ct[i] = arrival[i] + turn[i];
}
    const table = document.querySelector("table");

    for (let i = 0; i < n; i++) {
        const row = table.insertRow(-1);
        row.classList.add('process');

        const programNo = row.insertCell(0);
        programNo.innerHTML = i + 1;

        const ArrivalTime = row.insertCell(1);
        ArrivalTime.innerHTML = arrival[i];

        const BurstTime = row.insertCell(2);
        BurstTime.innerHTML = burst[i];

        const WaitTime = row.insertCell(3);
        WaitTime.innerHTML = wait[i];

        const TurnAroundTime = row.insertCell(4);
        TurnAroundTime.innerHTML = turn[i];

        const CompletionTime = row.insertCell(5);
        CompletionTime.innerHTML = ct[i];
    }
}
