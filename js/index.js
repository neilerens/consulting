$(document).ready(function(){


    var options = {
      valueNames: [ 'name', 'year', 'school', 'major', 'profilePic' ],
      item: 'user-item'
    };

    var values = [
      {
        name: 'James Shepherdson',
        position: 'Executive Director',
        year: 2016,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        profilePic: 'img/james.shepherdson.jpg',
        summary: 'James is a Molecular and Cellular Biology major and Computer Science minor. He tutors Baltimore City elementary school students with the JHU Tutorial Project, leads a peer tutoring group for Calculus III as part of the PILOT learning program, works as a student staffer at the Digital Media Center, gives admissions interviews as an Admissions Representative, and performs independent research in the Wendland lab. He plans to apply to MD/PhD programs after graduating in the spring.'
      },
      {
        name: 'Monica Rex',
        position: 'Director of Events & Logistics',
        year: 2016,
        school: 'WSE, Krieger',
        major: 'Biomedical Engineering, Spanish',
        profilePic: 'img/monica.rex.png',
        code: 'A Team',
        summary: 'Monica is the leader of a biomedical engineering design team and also serves as co-chair for the Student Engagement Committee of the Alumni Council. She is a member of Stepping Stone Ministry, and she volunteers for Safe House of Hope, a non-profit that fights human sex-trafficking in Baltimore. Monica studied abroad in Madrid during the Spring of 2015.'
      },
      {
        name: 'Neil Rens',
        year: 2016,
        position: 'Director of Recruitment & Development',
        school: 'WSE',
        major: 'Biomedical Engineering',
        code: 'A Team',
        summary: 'Neil was heavily involved with Aezon, the Hopkins XPRIZE team. Now, he leads a biomedical engineering design team and serves as a PILOT Core Leader. Neil is president of the Hopkins Medical Device Network and helped co-found MedHacks. He is also a member of HERO, Encore Music, and the premed honor society Alpha Epsilon Delta.',
        profilePic: 'img/neil.rens.jpg'
      },
      {
        name: 'Dannielle Brown',
        year: 2016,
        position: 'Director of Internal Affairs',
        school: 'Krieger',
        major: 'Public Health',
        profilePic: 'img/danni.brown.jpeg',
        summary: 'Dannielle is a Public Health Studies major on the Pre-Med track. She is a second year resident advisor, the director of internal affairs for Alumni Student Ambassadors, and the president of the Xi Tau Chapter of Alpha Kappa Alpha Sorority, Inc. Dannielle has recently studied abroad in Cape Town, South Africa where she worked with children affected by HIV/AIDS. While here in Baltimore, Dannielle is currently writing her senior honors thesis, and serves as a mentor at the US Dream Academy with children who suffer from parental incarceration.'
      },
      {
        name: 'Anjani Patel',
        year: 2017,
        position: 'Director of Philanthropy Education',
        school: 'WSE, Krieger',
        major: 'Applied Math & Statistics, Economics',
        profilePic: 'img/anjani.patel.jpg',
        summary: 'Anjani is an Applied Mathematics and Statistics & Economics double major and Entrepreneurship & Management minor from Washington state. In addition to being a member of the Alumni Student Ambassadors, Anjani is a Resident Advisor, Course Assistant in the Center for Leadership Education, a PILOT Leader, and the Step Up Chair.'
      },
      {
        name: 'Danait Yemane',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: 'Danait is a public health studies major and french cultural studies minor passionate about global affairs and traveling. She intends to pursue a career in global health or health policy in the future. This year, Danait traveled to Uganda and Mali to conduct public health research and will be pursuing a comparative studies community health program in India, South Africa and Brazil in the spring. On campus, Danait is the co-president for the Hopkins Eritrean and Ethiopian Society (HEES), an executive board member for the Women’s Initiative for Social Equity (WISE), and a member of the Johns Hopkins Underrepresented in the Medical Professions (JUMP) club.',
        profilePic: 'img/danait.yemane.jpg'
      },
      {
        name: 'Matthew Brown',
        year: 2017,
        school: 'Krieger',
        major: 'Public Health',
        summary: 'Matthew is a Public Health Major on the Pre-Med track. Matthew is a Residential Advisor and also serves as the President of the Black Student Union as well a Senator for the Student Government Association. Matthew is also a member of the Hopkins Honeybees Club as well as the Blue Key Society.',
        profilePic: 'img/matthew.brown.jpg'
      },
      {
        name: 'Ritchie Assini',
        year: 2016,
        school: 'Krieger',
        major: 'Sociology',
        summary: 'Ritchie is a Sociology major, minoring in Marketing Communications and Entrepreneurship and Management. She is planning to study marketing after graduation. Ritchie serves as a Teaching Assistant for Leadership Theory in the Center for Leadership Education Department and is also a member of the American Marketing Association. Ritchie played on the Varsity Women’s Lacrosse team for two years, before suffering a career ending injury, however she is now a commentator for the games.',
        profilePic: 'img/ritchie.assini.jpg'
      },
      {
        name: 'David Hamburger',
        year: 2018,
        school: 'Krieger',
        major: 'International Studies',
        summary: 'David is an International Studies major from Baltimore with an interest in security studies and diplomatic history. In addition to serving as an Alumni Student Ambassador, he is a Woodrow Wilson Research Fellow, is proud to work with the JHU Politik as Maryland Editor, and is involved with the International Studies Leadership Committee.',
        profilePic: 'img/David.Hamburger.jpg'
      },
      {
        name: 'Sydney Baker',
        year: 2018,
        school: 'Krieger',
        major: 'History, History of Art',
        summary: 'Sydney is a History and History of Art double major from Orlando, Florida. She works at the Homewood House Museum and is a member of Phi Mu and Step Up.',
        profilePic: 'img/sydney.baker.jpg'
      },
      {
        name: 'Giselle Lai',
        year: 2016,
        school: 'Krieger',
        major: 'History, Public Health',
        summary: "Giselle is a History and Public Health Studies double-major. She is a member of the Pi Beta Phi Women's Fraternity and of PEEPs, the peer health educator group under the Center for Health Education and Wellness. On campus, Giselle works as a study consultant for the Office of the Academic Advising and as an assistant at the Homewood House Museum.",
        profilePic: 'img/giselle.lai.jpg'
      },
      {
        name: 'Victoria Roberts',
        year: 2018,
        school: 'Krieger',
        major: 'Molecular and Cellular Biology',
        summary: 'Victoria is a sophomore Molecular and Cellular Biology major and French Literature minor on the Pre-Med track. Victoria plays flute and piccolo in the Hopkins Symphony Orchestra and is a volunteer music teacher for elementary school kids in Baltimore. She is also a member of Alpha Phi and the Encore Music program.',
        profilePic: 'img/victoria.roberts.png'
      },
      {
        name: 'Luca Pinelli',
        year: 2018,
        school: 'Krieger',
        major: 'International Studies',
        summary: 'Luca is an International Studies major and Italian minor. Luca is a member of the Johns Hopkins club Soccer and Squash teams as well as Delta Phi and the Nichol’s House Committee.',
        profilePic: 'img/luca.pinelli.png'
      },
      {
        name: 'Caitlin Romanczyk',
        year: 2017,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: 'Caitlin is a Biomedical Engineering major from New Jersey with a strong interest in designing medical devices. She serves as the Professional Development Chair for Theta Tau and tutors students in math and physics. She also enjoys photography and dance, and is one of the co-founders of Slainte, JHU’s Irish Dance Team.',
        profilePic: 'img/caitlin.romanczyk.jpg'
      },
      {
        name: 'Angela Roller',
        year: 2016,
        school: 'WSE',
        major: 'Computer Science',
        summary: '',
        profilePic: 'img/Angela_Roller.jpg'
      }
    ];

    var userList = new List('user-list', options, values);
    //
    //userList.add({
    //  name: "Gustaf Lindqvist",
    //  born: 1983
    //});

    

    $('.more_info').click(function() {
//        $('.more_info').removeClass('active')
        $(this).toggleClass('active');
    });
});
