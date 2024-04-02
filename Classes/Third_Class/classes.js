let books_card = document.querySelector('.books-card')

let Edadiya = [
    {
        BkName: "فارسی کی پہلی",
        AuthName: "",
        Sub: "فارسی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1AFtvRGOJu7NXgK2npVTbUdhn7526Sk-D/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "تشریحات رضوی شرح فارسی کی پہلی",
        AuthName: "",
        Sub: "شرح",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BIbK7pZCCzvF_8OaJqxH8sBe5c17lFqd/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "گلزار دبستاں",
        AuthName: "",
        Sub: " فارسی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BMzzUnreeovNkeehEH9wsL8YBL164djo/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "منہاج العربیہ اول",
        AuthName: "",
        Sub: "عربی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BYbu_pl7tWURYGdA9FH61yevub6ali74/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "منہاج العربیہ دوم",
        AuthName: "",
        Sub: "عربی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CMVoF7jHw_dg7MlAe8zREDTJUcZVRWP6/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "مصباح العربیہ شرح منہاج العربیہ اول دوم ",
        AuthName: "",
        Sub: "شرح", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BNoxwdrli1H5OGgzLQfQNHkBi7D5oWfI/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "تسہیل المصادر",
        AuthName: "",
        Sub: "فارسی صرف", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BavIaysZTWjEM3X0qHS1pYUGTz09Pkur/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "مصباح المصادر شرح تسہیل المصادر ",
        AuthName: "https://drive.google.com/file/d/1B_nTAV-nYoEIlMKRESnOBZzqP0kArhSY/view?usp=drivesdk",
        Sub: "شرح", Lang: "",
        BkUrl: "",
        BkImage: " "
    }, {
        BkName: "File_چمن زار عندلیباں شرح گلزار دبستاں .pdf",
        AuthName: "",
        Sub: "شرح", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BenVFo55Iq1wbRQDrOaVDqa-fv01Uroo/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "القراءۃ الواضحۃ اول",
        AuthName: "",
        Sub: "عربی ادب", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BkRILdYVX6yw06hap05dO5rdd1pCcx8E/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "File_ شرح القراءۃ الواضحۃ اول .pdf",
        AuthName: "",
        Sub: "شرح", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BgFNgLionJpbNa7aZhKiUvrFmg0ozLZ0/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "قصص النبیین اول",
        AuthName: "",
        Sub: "عربی ادب", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1Bo6mkguk6ui9HGIUl45lOWuXXGYMwAy1/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "File_اشرف النبیین شرح اردو قصص النبیین اول .pdf",
        AuthName: "",
        Sub: "شرح", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BnmisttowkFpkll3Jj_l5Jde_xIOm6JZ/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "باکورۃ الادب",
        AuthName: "",
        Sub: "عربی ادب", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CAEB5uXR1mEjDyKQJiIeItgzGvNxHOXs/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "File_روضۃ الادب شرح باکورۃ الادب .pdf",
        AuthName: "",
        Sub: "شرح", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1C3EOtG_q9EQ7co-dxdGnnNcfF4EvYob1/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "نظام شریعت",
        AuthName: "",
        Sub: "فقہ", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CFWWG3bwszP4D80gnC690_6_WuhBecgR/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "انوار شریعت",
        AuthName: "",
        Sub: "مسائل", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CG8uYNE7BlJJEI1BxxD-jQEwlcm1aDvF/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "سیرت خلفائے راشدین",
        AuthName: "",
        Sub: "سیرت", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CKu03E7rmiJ60gmoMt5a2WTouTnKcpbc/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "دراسۃ النحو",
        AuthName: "",
        Sub: "نحو", Lang: "",
        BkUrl: "https://drive.google.com/file/d/1CQ3STQhfOWqeRDB15uuAEwe1jKII8ZSA/view?usp=drivesdk",
        BkImage: " "
    }, {
        BkName: "",
        AuthName: "",
        Sub: "",
        Lang: "",
        BkUrl: "",
        BkImage: " "
    }
]

let Edadiya1 = [
    {
        BkName: "فارسی کی پہلی",
        AuthName: "",
        Sub: "فارسی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1AFtvRGOJu7NXgK2npVTbUdhn7526Sk-D/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "تشریحات رضوی شرح فارسی کی پہلی",
        AuthName: "",
        Sub: "شرح",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BIbK7pZCCzvF_8OaJqxH8sBe5c17lFqd/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "گلزار دبستاں",
        AuthName: "",
        Sub: " فارسی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BMzzUnreeovNkeehEH9wsL8YBL164djo/view?usp=drivesdk",
        BkImage: " "
    },
    {
        BkName: "منہاج العربیہ اول",
        AuthName: "",
        Sub: "عربی زبان",
        Lang: "",
        BkUrl: "https://drive.google.com/file/d/1BYbu_pl7tWURYGdA9FH61yevub6ali74/view?usp=drivesdk",
        BkImage: " "
    }]

function book(array) {
    array.forEach((books) => {
        const div = document.createElement('div')
        div.classList.add('books')
        div.innerHTML =
            `<div class="img-con">  <img src="${books.link}" alt="Book Image">
        </div>
        <div class="detail-con">   <h4 class="BName">${books.BkName}</h4>
          <p class="subName">Sub : <span>${books.Sub}</span></p>
          <p class="authorN">Auth : <span>Madinat-ul-Ilmiya</span></p>
          <a href="${books.BkUrl}" target="_blank">Download</a>`
        books_card.appendChild(div)
    })
    console.log("run")
}
 book(Edadiya)


