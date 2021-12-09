  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  const newInventors = inventors.filter(person => person.year <1600 && person.year >1499 );
  console.table(newInventors);

  const newInventors2 = inventors.map(person => person.first + " " + person.last);
  console.log(newInventors2);

  const newInventors3 = inventors.sort((a,b) => a.year > b.year ? 1:-1 );
  console.table(newInventors3);

  const totalYears = inventors.reduce((total,inventor) => {
      return total+(inventor.passed - inventor.year);
    },0); 
    console.log(totalYears);


    
    const newInventors4 = inventors.sort((a,b)=>{
        if ((a.passed - a.year) > (b.passed - b.year) ) {
            return -1;
        }
        else 
            return +1;
    })
    console.table(newInventors4);
    
    let arr = new Array();

    newInventors4.forEach(inventors => {
        arr.push(inventors.passed - inventors.year);
    })
    console.log(arr);
  

    // const boulevard = document.querySelector(".mw-category");
    // const b2 = Array.from(boulevard.querySelectorAll("a"));     
    // b2.map(a => a.textContent)
    //   .filter(a => a.includes("de"));

    
    
    const newPeople = people.sort((a,b) => {
      const[lasta,firsta] = a.split(", ");
      const[lastb,firstb] = b.split(", ");
      return lasta > lastb ? 1:-1;
    });
    console.log(newPeople);


    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const totalVehicle = data.reduce((total,vehicle) => {
      if (!total[vehicle]) {
        total[vehicle] = 0;
      }
      total[vehicle]++;

      return total;
      
    },{}); 
    console.log(totalVehicle);