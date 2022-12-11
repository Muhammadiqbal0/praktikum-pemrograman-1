// //sequntial search pencarian angka ganjil
const ganjil =[1,2,3,4,5,6,7,8,9,10]
const genap =[8,4,2,6,0];
const linearSearch = (arr, item) => {
    for (const i in arr) 
    {
      if (arr[i] === item) 
        return +i;
    }
    return -1;
  };
  console.log(linearSearch(ganjil, 1))
  console.log(linearSearch(ganjil, 3))
  console.log(linearSearch(ganjil, 5))
  console.log(linearSearch(ganjil, 7))
  console.log(linearSearch(ganjil, 9))


// //bubble sort angka genap
function bubblesort(array){
    for(let i = 0 ;i <= array.length - 1 ; i++){
        for(let j = 0 ; j < (array.length - i - 1); j++){
            if(array[j] > array[j + 1]){
                let angka = array[j]
                array[j] = array[j + 1]
                array[j + 1] = angka
            }
        }
    }
    console.log(array);
}
bubblesort(genap);