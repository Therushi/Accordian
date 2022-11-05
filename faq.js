const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
  {
    id: 4,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },

];

const faqs = [];


function showFaq(id) {
  let classListLength = document.querySelectorAll("p")[id-1].classList.length;
  if (classListLength == 1) {
    let classToRemove = document.querySelectorAll("p")[id-1]
    classToRemove.classList.remove("hidden");
  }else{
    let classToRemove = document.querySelectorAll("p")[id-1]
    classToRemove.classList.add("hidden");
  }
}

// createFaq("Who are you","Im Rushi",4)

function createFaq(qes, ans, id) {
  const accordianBody = document.querySelector(".accordian_body");

  const faqDiv = document.createElement("div");
  faqDiv.className = "faq";

  const faqHeader = document.createElement("div");
  faqHeader.className = "faq_header";

  const question = document.createElement("h3");
  question.innerText = qes;

  const answer = document.createElement("p");
  answer.innerText = ans;
  answer.className = "hidden";
  answer.setAttribute("id", id);

  const button = document.createElement("div");
  button.className = "show_btn";
  button.setAttribute("onClick", `showFaq(${id})`);
  button.textContent = "+";
  console.log(button);

  let faq_header_question = faqHeader.appendChild(question);
  let faq_header_button = faqHeader.appendChild(button);

  faqHeader.appendChild(faq_header_question);
  faqHeader.appendChild(faq_header_button);
  faqDiv.appendChild(faqHeader);
  faqDiv.appendChild(answer);

  accordianBody.appendChild(faqDiv);
}

function btnStatusUpdate() {
  faqData.forEach((item) => {
    createFaq(item.question, item.answer,item.id);
  });
}
