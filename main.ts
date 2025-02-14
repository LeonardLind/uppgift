
  function getLength(jumpings: number[]): number {  
    return jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump);
  }
  
  // Test Test 😊 
  const jumps = [5, 6, 7]; 
  const totalLength = getLength(jumps);  
  console.log(totalLength);  
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean = false
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
    student.passed = student.name === "Sebastian" && student.handedInOnTime;
  
    return student.passed ? "VG" : "IG";
  }

  // Test Test 😊 
  const student1 = new Student("Sebastian", true);
  const status = getStudentStatus(student1);
  console.log(status); 

  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class TemperatureRecord {
    constructor(
      public location: string,
      public date: Date, 
      public temperature: number
    ) {}
  }

  function averageWeeklyTemperature(records: TemperatureRecord[]): number {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7days * 24hours * 60minutes * 60seconds * 1000milliseconds
  
    let totalTemperature = 0;
    let count = 0;
  
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
  
      if (record.location === "Stockholm" && record.date.getTime() > oneWeekAgo.getTime()) {
        totalTemperature += record.temperature;
        count++;
      }
    }

    return count > 0 ? totalTemperature / count : 0; // 😊
  }

  // Test Test 😊
  const records = [
    new TemperatureRecord("Stockholm", new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), 20),
    new TemperatureRecord("Stockholm", new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 18),
    new TemperatureRecord("Gothenburg", new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), 15)
  ];
  
  console.log(averageWeeklyTemperature(records)); 

  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
    class Product {
      constructor(
        public name: string,
        public price: number,
        public amount: number,
        public description: string,
        public image: string
      ) {}
    
      showProduct(): HTMLElement {
        const container = document.createElement("div");
      
        const title = document.createElement("h4");
        title.innerHTML = this.name;
      
        const imageTag = document.createElement("img");
        imageTag.src = this.image;
      
        const priceTag = document.createElement("strong");
        priceTag.innerHTML = `Price: $${this.price}`;
      
        const descriptionTag = document.createElement("p");
        descriptionTag.innerHTML = this.description;
      
        const amountTag = document.createElement("p");
        amountTag.innerHTML = `Amount ${this.amount}`;
      
        container.appendChild(title);
        container.appendChild(imageTag);
        container.appendChild(priceTag);
        container.appendChild(amountTag);
        container.appendChild(descriptionTag);
      
        return container;
      }
      
    }
    
    // Test Test 😊
    const testest = document.getElementById("app");
    
    const testProduct = new Product(
      "lorems",
      13.37,
      10,
      "lorem ipsum dolor sit amet",
      "https://testtest.com/testest.png"
    );
    
    testest?.appendChild(testProduct.showProduct());
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
    function presentStudents(students: Student[]): void {
      for (const student of students) {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = student.handedInOnTime; 
        
        container.appendChild(checkbox);
        
        let listOfStudents = document.querySelector(student.handedInOnTime ? "ul#passedstudents" : "ul#failedstudents");
        
        listOfStudents?.appendChild(container);
      }
    }

    (presentStudents)
    
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    let result = ["Lorem", " ipsum", " dolor", " sit", " amet"];;
  
    return result.join();
  }
      // Test Test 😊
  console.log(concatenateStrings());
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */

      interface User {
        name: string;
        birthday: Date;
        email: string;
        password: string;
        avatar: string;
        adress: string;
      }
      
      function createUser(user: User) {
        let ageDiff = Date.now() - user.birthday.getTime();
        let ageDate = new Date(ageDiff);
        let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      
        console.log(userAge);
      
        if (!(userAge < 20)) {
          console.log("Användare skapad:");
        } else {
          console.log("Du är under 20 år");
        }
      }
      
      // Test Test 😊
        createUser({
        name: "Leo Leon",
        birthday: new Date("1999-1-19"),
        email: "LeoLeon@test.com",
        password: "Abc123",
        avatar: "https://testtest.com/testest.png",
        adress: "Testvägen 1"
      });