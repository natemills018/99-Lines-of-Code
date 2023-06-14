let friends = ['Matt', 'Nick', 'Noelle', 'Roger', 'Jordan'];

for (let a = 0; a < friends.length; a++) {
    for (let b = 99; b >= 0; b--) {
        if (b == 99) {
            console.log(friends[a]);
            console.log(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' lines of code in the file');
        } else {
            console.log(b + " lines of code in file, " + b + " lines of code, " + friends[a] + ", strikes one out" + ", clears it all out, " + [b - 1] + ' lines of code in the file');
            if (b == 2) {
                console.log("1 line of code in file, " + "1 line of code, " + friends[a] + ", strikes one out" + ", clears it all out" + ", no more lines of code in the file");
                break;
            }
        }

    }
}