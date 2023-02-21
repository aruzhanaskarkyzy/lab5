let column_1 = [4, 5, 1, 3, 5, 7, 8, 9, 1, 3, 4, 6, 1, 2, 3, 4, 5, 1, 3, 5, 7, 8, 9, 1, 3, 4, 6, 1, 2, 3];
let column_2 = [1, 3, 4, 5, 6, 7, 3, 3, 3, 2, 3, 5, 7, 9, 1, 1, 3, 4, 5, 6, 7, 3, 3, 3, 2, 3, 5, 7, 9, 1];
let column_3 = [[40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65], [40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65], [40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65], [40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65], [40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65], [40, 42, 53], [61, 53], [46, 93, 85, 55], [47, 50, 96], [100, 66, 97, 65]];
let column_4 = [43, 56, 48, 79, 86, 99, 47, 66, 85, 88, 94, 90, 53, 77, 89, 43, 56, 48, 79, 86, 99, 47, 66, 85, 88, 94, 90, 53, 77, 89];

let sum_1 = 0;

for (var i = 0; i < column_1.length; i++) {
	sum_1 += column_1[i];
}

let sum_2 = 0;

for (var i = 0; i < column_2.length; i++) {
	sum_2 += column_2[i];
}

let sum_3 = 0;

for (var i = 0; i < column_3.length; i++) {
	for (var j = 0; j < column_3[i].length; j++) {
		sum_3 += column_3[i][j];
	}
}

let sum_4 = 0;

for (var i = 0; i < column_4.length; i++) {
	sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = 0;

for (var i = 0; i < sums.length; i++) {
	total_score += sums[i];
}

const results = {
	column_1: column_1,
	column_2: column_2,
	column_3: column_3,
	column_4: column_4,
	sums: sums,
	total_score: total_score
}

console.log(results);




