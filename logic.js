$(document).ready(function () {
    hideSteps();
    $('#progressbar2').hide();
});


function hideSteps() {

    for (let i = 1; i <= 4; i++) { $("#step-" + i).hide(); }
}

var doneChecklist = [];
let remainingChecklist = [];
let employmentChecklist = [];
let incomeChecklist = [];
let businessChecklist = [];
let foreignIncomeChecklist = [];
let paymentChecklist = [];
let expenseChecklist = [];

function client_status(value) {

    if (value === 'N') {
        $('.address').removeClass('d-none');
        $('.newUserForm').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".address").offset().top
        }, 1200);

    } else {
        $('.newUserForm').removeClass('d-none');
        $('.address').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".newUserForm").offset().top
        }, 1200);
    }
}

function client_completed_new_client_form(value) {

    if (value === 'N') {
        $('.personal-info-form').removeClass('d-none');
        $('.health').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".personal-info-form").offset().top
        }, 1200);

    } else {
        $('.health').removeClass('d-none');
        $('.personal-info-form').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".health").offset().top
        }, 1200);
    }
}

function unhide(value) {

    $('html, body').animate({
        scrollTop: $('.' + value).removeClass('d-none').offset().top
    }, 1200);


}

function client_address(value) {

    if (value === 'N') {
        $('.address-form').addClass('d-none');
        $('.phone').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".phone").offset().top
        }, 1200);


    } else {
        $('.address-form').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".address-form").offset().top
        }, 1200);
        $('.phone').addClass('d-none');


    }
}

function client_bank(value) {

    if (value === 'N') {
        $('.bank-details').addClass('d-none');
        $('.health').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".health").offset().top
        }, 1200);


    } else {
        $('.bank-details').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".bank-details").offset().top
        }, 1200);
        $('.health').addClass('d-none');
    }
}


function client_contact(value) {

    if (value === 'N') {
        $('.phone-details').addClass('d-none');
        $('.bank').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".bank").offset().top
        }, 1200);

    } else {
        $('.phone-details').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".phone-details").offset().top
        }, 1200);
        $('.bank').addClass('d-none');
    }
}

function client_travel_for_work(value) {

    if (value === 'N') {
        $('.d2-q2,.d2-q3,.d2-q4').addClass('d-none');
        $('.d3').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d3").offset().top
        }, 1200);

    } else {
        $('.d2-q2').removeClass('d-none');
        $('.d3,.d2-q3,.d2-q4').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d2-q2").offset().top
        }, 1200);

    }
}

function client_work_related_KM(value) {

    if (!value) {
        alert('Please enter the KMs');
        return false;

    } else if (value > 5000) {

        $('html, body').animate({
            scrollTop: $(".km_warning").removeClass('d-none').offset().top
        }, 1200);


        return false;
    }
}

function continue14() {
    let yearsYouTravel = document.getElementById("client_work_related_KM").value;
    if (yearsYouTravel == "") {
        alert("years you have traveled");
        return false;
    }
    else {
        unhide('d2');
    }
}


function accommodation(value) {
    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_accommodation_expense').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_accommodation_expense").offset().top
        },);
    } else {
        $('.client_accommodation_expense').addClass('d-none');
    }

}

function travel_hiring(value) {
    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_hiring_expense').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_hiring_expense").offset().top
        },);
    } else {
        $('.client_hiring_expense').addClass('d-none');
    }
}
''
function travel_meal_expenses(value) {
    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_meals_expense').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_meals_expense").offset().top
        },);
    } else {
        $('.client_meals_expense').addClass('d-none');
    }
}

function client_income_source(value) {

    if (value === 'N') {
        $('.q1,.q1-p2,.q2,.q3,.q4,.q5').addClass('d-none');
        $('.q5').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q5").offset().top
        }, 1200);

    } else {
        $('.q1').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q1").offset().top
        }, 1200);
        $('.q5').addClass('d-none');
    }
}

function client_employer(value) {

    $('.q2').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q2").offset().top
    }, 1200);

}


function client_lumpsum(value) {

    $('.q3').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q3").offset().top
    }, 1200);
}

function client_termination_payment(value) {



    if (value === 'N') {
        employmentChecklist.pop("Please ensure you provide us with a copy of your Employment Termination Payment Summary");
        remainingChecklist.push("Please ensure you provide us with a copy of your Employment Termination Payment Summary");

        $('.q4').removeClass('d-none');
        $('.q3-summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q4").offset().top
        }, 1200);

    } else {
        employmentChecklist.push("Please ensure you provide us with a copy of your Employment Termination Payment Summary");
        doneChecklist.push("Please ensure you provide us with a copy of your Employment Termination Payment Summary");

        $('.q3-summary').removeClass('d-none');
        $('.q4').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q3-summary").offset().top
        }, 1200);

    }

}


function client_travel_for_6weeks_or_more(value) {


    if (value === 'N') {

        doneChecklist.pop("If your travel is for 6 or more nights in a row and you didn’t receive a travel allowance for domestic travel or your expenses exceed the reasonable travel allowance expense amounts as set by the ATO, then you are required to have a Travel Diary in place. We may require a copy of your travel diary");
        expenseChecklist.pop("If your travel is for 6 or more nights in a row and you didn’t receive a travel allowance for domestic travel or your expenses exceed the reasonable travel allowance expense amounts as set by the ATO, then you are required to have a Travel Diary in place. We may require a copy of your travel diary");

        $('.d2-q4').removeClass('d-none');
        $('.d2-q3_summary-summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d2-q4").offset().top
        }, 1200);

    } else {
        $('.d2-q3_summary-summary').removeClass('d-none');
        doneChecklist.push("If your travel is for 6 or more nights in a row and you didn’t receive a travel allowance for domestic travel or your expenses exceed the reasonable travel allowance expense amounts as set by the ATO, then you are required to have a Travel Diary in place. We may require a copy of your travel diary");
        expenseChecklist.push("If your travel is for 6 or more nights in a row and you didn’t receive a travel allowance for domestic travel or your expenses exceed the reasonable travel allowance expense amounts as set by the ATO, then you are required to have a Travel Diary in place. We may require a copy of your travel diary");
        $('html, body').animate({
            scrollTop: $(".d2-q3_summary-summary").offset().top
        }, 1200);

    }

}

function client_work_related_clothing(value) {


    if (value === 'N') {

        $('.d4').removeClass('d-none');
        $('.d3_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d4").offset().top
        }, 1200);

    } else {
        $('.d3_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d3_summary").offset().top
        }, 1200);
        $('.d4').addClass('d-none');
    }

}

function client_work_related_educatiom(value) {


    if (value === 'N') {

        $('.d5').removeClass('d-none');
        $('.d4_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d5").offset().top
        }, 1200);

    } else {
        $('.d4_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d4_summary").offset().top
        }, 1200);
        $('.d5').addClass('d-none');
    }

}

function client_work_from_home(value) {


    if (value === 'N') {

        $('.d6').removeClass('d-none');
        $('.d5_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d6").offset().top
        }, 1200);

    } else {
        $('.d5_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d5_summary").offset().top
        }, 1200);
        $('.d6').addClass('d-none');
    }

}


function client_unreimbursed_work_expenses(value) {


    if (value === 'N') {

        $('.d7').removeClass('d-none');
        $('.d6_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d7").offset().top
        }, 1200);

    } else {
        $('.d6_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d6_summary").offset().top
        }, 1200);
        $('.d7').addClass('d-none');
    }

}
function client_non_work_related_travel(value) {
    if (value === 'N') {
        $('.d3').removeClass('d-none');
        // document.getElementById("non-work_related_associates").classList.remove("d-none");
    }
    else {
        document.getElementById("non-work_related_associates").classList.remove("d-none");
        $('.d3').removeClass('d-none');
    }
}

function client_investment_related_expenses(value) {


    if (value === 'N') {

        $('.d9').removeClass('d-none');
        $('.d7_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d9").offset().top
        }, 1200);

    } else {
        $('.d7_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d7_summary").offset().top
        }, 1200);
        $('.d9').addClass('d-none');
    }

}

function getd10() {

    let isOldClient = document.getElementById('old_client');

    if (isOldClient.checked) {
        $('.d10').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d10").offset().top
        }, 1200);
        $('.d12').addClass('d-none');
    } else {
        $('.d12').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d12").offset().top
        }, 1200);
        $('.d10').addClass('d-none');
    }


}

function newClientPrivateHealthInsurance(value) {
    if (value === 'Y') {

        $('.family-form').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".health-insurance-form").removeClass('d-none').offset().top
        }, 1200);
    } else {
        $('.health-insurance-form').addClass('d-none');
        createFamilyTable();
        $('html, body').animate({
            scrollTop: $(".family-form").removeClass('d-none').offset().top
        }, 1200);
    }
}

function client_deductible_gift_donations(value) {
    if (value === 'N') {
        getd10();
        $('.d9_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d10").offset().top
        }, 1200);
    } else {
        $('.d9_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d9_summary").offset().top
        }, 1200);
        $('.d10').addClass('d-none');
    }
}

function client_superannuation_tax_claim(value) {
    if (value === 'N') {
        $('.d13').removeClass('d-none');
        $('.d12_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d13").offset().top
        }, 1200);
    } else {
        $('.d12_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d12_summary").offset().top
        }, 1200);
        $('.d13').addClass('d-none');
    }
}

function client_tax_affairs(value) {
    if (value === 'N') {
        $('.d12').removeClass('d-none');
        $('.d10_summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d12").offset().top
        }, 1200);
    } else {

        // doneChecklist.push('Client has foreign pension. Consider if UPP needs to be calculated');

        $('.d10_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d10_summary").offset().top
        }, 1200);
        $('.d12').addClass('d-none');
    }
}

function client_funds_claim_notice_acknowledgement(value) {
    if (value === 'N') {
        doneChecklist.pop('Please ensure that we are provided with a copy of your fund acknowledgement letter');
        incomeChecklist.pop('Please ensure that we are provided with a copy of your fund acknowledgement letter');

        $('.acknowledgement_no').removeClass('d-none');
        $('.acknowledgement_yes').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".acknowledgement_no").offset().top
        }, 1200);
    } else {
        doneChecklist.push('Please ensure that we are provided with a copy of your fund acknowledgement letter');
        incomeChecklist.push('Please ensure that we are provided with a copy of your fund acknowledgement letter');
        $('.acknowledgement_yes').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".acknowledgement_yes").offset().top
        }, 1200);
        $('.acknowledgement_no').addClass('d-none');
    }
}

function client_employee_share_scheme(value) {

    if (value === 'N') {
        remainingChecklist.push('Please ensure you provide us with a copy of your ESS Payment Summary.');
        employmentChecklist.pop('Please ensure you provide us with a copy of your ESS Payment Summary.');
        doneChecklist.pop('Please ensure you provide us with a copy of your ESS Payment Summary.');

        $('.q5').removeClass('d-none');
        $('.q4-summary').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q5").offset().top
        }, 1200);

    } else {
        doneChecklist.push('Please ensure you provide us with a copy of your ESS Payment Summary.');
        employmentChecklist.push('Please ensure you provide us with a copy of your ESS Payment Summary.');

        $('.q4-summary').removeClass('d-none');
        $('.q5').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q4-summary").offset().top
        }, 1200);

    }
}


function client_termination_payment_summary(value) {

    $('.q4').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q4").offset().top
    }, 1200);
    doneChecklist.push('Termination Payment Summary');
    employmentChecklist.push('Termination Payment Summary');

}

function client_ESS_payment_summary(value) {


    $('.q5').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q5").offset().top
    }, 1200);
    doneChecklist.push('ESS Payment Summary');
    employmentChecklist.push('ESS Payment Summary');

}

function client_receive_government_payments(value) {

    if (value === 'N') {

        $('.q6').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q6").offset().top
        }, 1200);
        $('.q5-summary').addClass('d-none');

    } else {
        $('.q6').addClass('d-none');
        $('.q5-summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q5-summary").offset().top
        }, 1200);

    }
}

function client_interest_income(value) {

    if (value === 'N') {

        $('.q7').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q7").offset().top
        }, 1200);
        $('.q6-2').addClass('d-none');

    } else {
        $('.q7').addClass('d-none');
        $('.q6-2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q6-2").offset().top
        }, 1200);

    }
}

function client_interest_income_summary(value) {

    $('.q7').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q7").offset().top
    }, 1200);

}

function client_investment_income(value) {

    if (value === 'N') {
        remainingChecklist.push('Information you have in relation to your investment income ie Dividend slips annual tax summaries distributions statements');
        incomeChecklist.pop('Information you have in relation to your investment income ie Dividend slips annual tax summaries distributions statements');

        $('.q8').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q8").offset().top
        }, 1200);
        $('.q7-summary-p1').addClass('d-none');

    } else {
        doneChecklist.push('Information you have in relation to your investment income ie Dividend slips annual tax summaries distributions statements');
        incomeChecklist.push('Information you have in relation to your investment income ie Dividend slips annual tax summaries distributions statements');

        $('.q8').addClass('d-none');
        $('.q7-summary-p1').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q7-summary-p1").offset().top
        }, 1200);

    }
}

function client_shares(value) {


    $('.q7-summary-p2').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q7-summary-p2").offset().top
    }, 1200);

}


function foreignPension(value) {

    let checkbox = document.getElementById(value);

    if (checkbox.checked) {
        $('.client_foreign_pension').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_foreign_pension").offset().top
        },);
        doneChecklist.push('Australian $ equivalent of your foreign pension received between 1 July and 30 June');
        foreignIncomeChecklist.push('Australian $ equivalent of your foreign pension received between 1 July and 30 June');

    } else {
        $('.client_foreign_pension').addClass('d-none');
        doneChecklist.pop('Australian $ equivalent of your foreign pension received between 1 July and 30 June');
        foreignIncomeChecklist.pop('Australian $ equivalent of your foreign pension received between 1 July and 30 June');

    }

}

function foreignRental(value) {


    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_foreign_rental_income').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_foreign_rental_income").offset().top
        }, 1200);
        doneChecklist.push('All income and expenses that relate to your foreign rental property');
        foreignIncomeChecklist.push('All income and expenses that relate to your foreign rental property');
    } else {
        $('.client_foreign_rental_income').addClass('d-none');
        doneChecklist.pop('All income and expenses that relate to your foreign rental property');
        foreignIncomeChecklist.pop('All income and expenses that relate to your foreign rental property');
    }
}

function foreignEmployment(value) {

    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_foreign_employment').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_foreign_employment").offset().top
        }, 1200);
        doneChecklist.push('Australian $ equivalent of all Foreign Employment income received between 1 July and 30 June.');
        foreignIncomeChecklist.push('Australian $ equivalent of all Foreign Employment income received between 1 July and 30 June.');
    } else {
        $('.client_foreign_employment').addClass('d-none');
        doneChecklist.pop('Australian $ equivalent of all Foreign Employment income received between 1 July and 30 June.');
        foreignIncomeChecklist.pop('Australian $ equivalent of all Foreign Employment income received between 1 July and 30 June.');

    }
}

function foreignInvestments(value) {

    let checkbox = document.getElementById(value);
    if (checkbox.checked) {
        $('.client_foreign_investments').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_foreign_investments").offset().top
        }, 1200);
        doneChecklist.push('All income and expenses that relate to your foreign investments');
        foreignIncomeChecklist.push('All income and expenses that relate to your foreign investments');
    } else {
        $('.client_foreign_investments').addClass('d-none');
        doneChecklist.pop('All income and expenses that relate to your foreign investments');
        foreignIncomeChecklist.pop('All income and expenses that relate to your foreign investments');
    }
}

function client_foreign_asset_more_than_50(value) {


    $('.q-11').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q-11").offset().top
    }, 1200);

}

function client_managed_funds_unit(value) {

    // alert("i am running but you are an idiot 1");
    $('.q7-summary-p299').removeClass('d-none');
    // $('.q7-summary-p3').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q7-summary-p299").offset().top
    }, 1200);
}
function client_crypto(value) {
    // alert("i am running but you are an idiot 2");
    $('.q7-summary-p3').removeClass('d-none');
    // $('.q7-summary-p3').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q7-summary-p3").offset().top
    }, 1200);
}

function client_australian_annuities_superannuation(value) {

    if (value === 'N') {
        doneChecklist.pop('PAYG Payment Summary – Superannuaiton Income Stream.');
        paymentChecklist.pop('PAYG Payment Summary – Superannuaiton Income Stream.');


        $('.q-12').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-12").offset().top
        }, 1200);
        $('.client_australian_annuities_superannuation_q2').addClass('d-none');

    } else {

        doneChecklist.push('PAYG Payment Summary – Superannuaiton Income Stream.');
        paymentChecklist.push('PAYG Payment Summary – Superannuaiton Income Stream.');

        $('.q-12').addClass('d-none');
        $('.client_australian_annuities_superannuation_q2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_australian_annuities_superannuation_q2").offset().top
        }, 1200);

    }
}

function client_superannuation_lumpsum(value) {

    if (value === 'N') {
        doneChecklist.pop('PAYG Payment Summary – Superannuaiton Lump Sum.');
        paymentChecklist.pop('PAYG Payment Summary – Superannuaiton Lump Sum.');
        $('.q-13').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13").offset().top
        }, 1200);
        $('.client_superannuation_lumpsum_q2').addClass('d-none');

    } else {
        doneChecklist.push('PAYG Payment Summary – Superannuaiton Lump Sum.');
        paymentChecklist.push('PAYG Payment Summary – Superannuaiton Lump Sum.');
        $('.q-13').addClass('d-none');
        $('.client_superannuation_lumpsum_q2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_superannuation_lumpsum_q2").offset().top
        }, 1200);

    }
}

function client_payg_payment_summary_lumpsum(value) {
    remainingChecklist.push('PAYG Payment Summary – Superannuaiton Lump Sum');
    paymentChecklist.push('PAYG Payment Summary – Superannuaiton Lump Sum');
    $('.q-13').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q-13").offset().top
    }, 1200);

}

function client_payg_payment_summary(value) {
    remainingChecklist.push('your PAYG Payment Summary – Superannuaiton Income Stream.');
    paymentChecklist.push('your PAYG Payment Summary – Superannuaiton Income Stream.');
    $('.q-12').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q-12").offset().top
    }, 1200);

}

function client_partnership_distribution(value) {

    $('.q7-summary-p4').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q7-summary-p4").offset().top
    }, 1200);
}

//q14
function client_other_income_this_year(value) {

    if (value === 'N') {

        $('.q-14-btn').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-14-btn").offset().top
        }, 1200);
        $('.q-14_p2').addClass('d-none');

    } else {
        $('.q-14-btn').addClass('d-none');
        $('.q-14_p2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-14_p2").offset().top
        }, 1200);
    }
}

function client_trust_distribution(value) {
    $('.q8').removeClass('d-none');
    $('.q7-summary-p5').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q8").offset().top
    }, 1200);
}


function client_business_income_by_sole_trader(value) {

    doneChecklist.push('Provide Any Information You Have In Relation To Your Investment Income Ie Dividend Slips Annual Tax Summaries Distributions Statements');

    businessChecklist.push('Provide Any Information You Have In Relation To Your Investment Income Ie Dividend Slips Annual Tax Summaries Distributions Statements');
    let isNewClient = document.getElementById('new_client');


    if (value === 'N') {

        $('.q-14').removeClass('d-none');
        // $('.q-13_p2_q1').addClass('d-none');
        $('.q-13_q2').addClass('d-none');
        $('.q-13_q3').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-14").offset().top
        }, 1200);


    } else {
        $('.q-14').addClass('d-none');
        if (isNewClient.checked) {
            $('.q-13_q3').removeClass('d-none');
            $('html, body').animate({
                scrollTop: $(".q-13_q3").offset().top
            }, 1200);
            $('.q-13_q2').addClass('d-none');
        } else {
            $('.q-13_q2').removeClass('d-none');
            $('html, body').animate({
                scrollTop: $(".q-13_q2").offset().top
            }, 1200);
            $('.q-13_q3').addClass('d-none');
        }
    }
}

function client_business_activity_reported(value) {

    if (value === 'N') {

        $('.q-13_q2_part2').removeClass('d-none');
        $('.q-13_q4').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13_q2_part2").offset().top
        }, 1200);
        $('.q-13_q3').addClass('d-none');
    } else {
        $('.q-13_q2_part2').addClass('d-none');
        $('.q-13_q3').addClass('d-none');
        $('.q-13_q4').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13_q4").offset().top
        }, 1200);


    }
}

function client_took_finance_out_for_assets(value) {

    if (value === 'N') {
        doneChecklist.pop(' Please ensure you provide copies of finance paperwork to us. ');
        expenseChecklist.pop(' Please ensure you provide copies of finance paperwork to us. ');

        $('.q-14').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-14").offset().top
        }, 1200);
        $('.q-13_q7_finance').addClass('d-none');
    } else {
        doneChecklist.push(' Please ensure you provide copies of finance paperwork to us. ');
        expenseChecklist.push(' Please ensure you provide copies of finance paperwork to us. ');

        $('.q-13_q7_finance').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13_q7_finance").offset().top
        }, 1200);
        $('.q-14').addClass('d-none');
    }
}

function client_purchased_new_business_this_year(value) {

    if (value === 'N') {
        doneChecklist.pop('Please ensure you provide copies of new asset invoices to us.');
        expenseChecklist.pop('Please ensure you provide copies of new asset invoices to us.');

        $('.q-14').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-14").offset().top
        }, 1200);
        $('.q-13_q7_table').addClass('d-none');
    } else {
        doneChecklist.push('Please ensure you provide copies of new asset invoices to us.');
        expenseChecklist.push('Please ensure you provide copies of new asset invoices to us.');

        $('.q-13_q7_table').removeClass('d-none');
        createBusinessTable();
        $('html, body').animate({
            scrollTop: $(".q-13_q7_table").offset().top
        }, 1200);
        $('.q-14').addClass('d-none');
    }
}

function client_accounting_software(value) {

    if (value === 'N') {

        doneChecklist.pop('Please ensure you provide copies of accounting software invoices to us.');
        expenseChecklist.pop('Please ensure you provide copies of accounting software invoices to us.');

        $('.q-13_q6').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13_q6").offset().top
        }, 1200);
        createExpenseTable();
        $('.q-13_q5_p2').addClass('d-none');
    } else {
        doneChecklist.push('Please ensure that we are invited to your data file or that you have made reports or the data file available to us.');
        expenseChecklist.push('Please ensure that we are invited to your data file or that you have made reports or the data file available to us.');
        $('.q-13_q6').addClass('d-none');
        $('.q-13_q5_p2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-13_q5_p2").offset().top
        }, 1200);


    }
}

function client_business_GST_registration(value) {
    $('.q-13_q5').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q-13_q5").offset().top
    }, 1200);
}

function client_interest_more_than_200(value) {
    if (value === 'N') {
        remainingChecklist.push('Please ensure a summary of your interest income is provided to us.');
        incomeChecklist.pop('Please ensure a summary of your interest income is provided to us.');

        $('.q7').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q7").offset().top
        }, 1200);
        $('.q6-2-summary').addClass('d-none');

    } else {
        doneChecklist.push('Please ensure a summary of your interest income is provided to us.');
        incomeChecklist.push('Please ensure a summary of your interest income is provided to us.');

        $('.q7').addClass('d-none');
        $('.q6-2-summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q6-2-summary").offset().top
        }, 1200);


    }
}

function client_second_residence_move_out(value) {

    $('.q9_q2_part2_result').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q9_q2_part2_result").offset().top
    }, 1200);

    // $('.q10').removeClass('d-none');
    // $('html, body').animate({
    //     scrollTop: $(".q10").offset().top
    // }, 1200);

}


function client_principal_residence(value) {

    if (value === 'N') {

        $('.q9-property-q2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q9-property-q2").offset().top
        }, 1200);
        $('.q10').addClass('d-none');


    } else {
        $('.q9-property-q2').addClass('d-none');
        $('.q10').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q10").offset().top
        }, 1200);

    }
}

function client_principal_residence_Q2(value) {

    if (value === 'N') {

        remainingChecklist.push('Please ensure you provide us with purchase and sale information. Dont forget stamp duty and agent /legal fees. If the property was not a rental property but also not your principal place of residence (ie. A holiday house) please also provide costs of ownership for the duration of your ownership such as council rates interest on loans water rates (not usage) Repairs and maintenance capital improvements and any other costs you may feel are relevant.')
        incomeChecklist.pop('Please ensure you provide us with purchase and sale information. Dont forget stamp duty and agent /legal fees. If the property was not a rental property but also not your principal place of residence (ie. A holiday house) please also provide costs of ownership for the duration of your ownership such as council rates interest on loans water rates (not usage) Repairs and maintenance capital improvements and any other costs you may feel are relevant.')

        $('.client_principal_residence_Q2_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_principal_residence_Q2_summary").offset().top
        }, 1200);

        $('.q10').removeClass('d-none');

    } else {
        $('.client_principal_residence_Q2_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_principal_residence_Q2_summary").offset().top
        }, 1200);

        $('.client_principal_residence_Q2_next_part').removeClass('d-none');


        doneChecklist.push('Please ensure you provide us with purchase and sale information. Dont forget stamp duty and agent /legal fees. If the property was not a rental property but also not your principal place of residence (ie. A holiday house) please also provide costs of ownership for the duration of your ownership such as council rates interest on loans water rates (not usage) Repairs and maintenance capital improvements and any other costs you may feel are relevant.')
        incomeChecklist.push('Please ensure you provide us with purchase and sale information. Dont forget stamp duty and agent /legal fees. If the property was not a rental property but also not your principal place of residence (ie. A holiday house) please also provide costs of ownership for the duration of your ownership such as council rates interest on loans water rates (not usage) Repairs and maintenance capital improvements and any other costs you may feel are relevant.')

    }
}

function client_principal_residence_first_acquired(value) {

    if (value === 'N') {

        $('.q9_q2_part2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q9_q2_part2").offset().top
        }, 1200);
        $('.client_principal_residence_first_acquired_next_part').addClass('d-none');

    } else {

        $('.client_principal_residence_first_acquired_next_part').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_principal_residence_first_acquired_next_part").offset().top
        }, 1200);
        $('.q9-property-q2').addClass('d-none');
        $('.q9_q2_part2_result').addClass('d-none');


    }
}


function client_second_residence_owner(value) {

    $('.q10').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".q10").offset().top
    }, 1200);

}

function client_principal_residence_move_back(value) {

    if (value === 'N') {

        $('.q10').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q10").offset().top
        }, 1200);
        $('.client_principal_residence_move_back_next_part').addClass('d-none');

    } else {

        $('.client_principal_residence_move_back_next_part').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_principal_residence_move_back_next_part").offset().top
        }, 1200);
        $('.q10').addClass('d-none');


    }
}


function getDateDifference() {


    let move_out_date = document.getElementById('move_out_date').value;

    let move_back_date = document.getElementById('move_back_date').value;

    // To set two dates to two variables
    var date1 = new Date(move_out_date);
    var date2 = new Date(move_back_date);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (Difference_In_Days < (365 * 6)) {

        $('.client_principal_residence_move_back_next_part_2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_principal_residence_move_back_next_part_2").offset().top
        }, 1200);
        $('.q10').addClass('d-none');
    } else {
        $('.client_principal_residence_move_back_next_part_2').addClass('d-none');
        $('.q10').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q10").offset().top
        }, 1200);
    }


}

function client_foreign_source_income(value) {

    if (value === 'N') {

        $('.q-11').removeClass('d-none');
        $('.client_foreign_source_income_next_part').addClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-11").offset().top
        }, 1200);


    } else {
        $('.q-11').addClass('d-none');
        $('.client_foreign_source_income_next_part').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_foreign_source_income_next_part").offset().top
        }, 1200);


    }
}


function client_rental_properties(value) {

    if (value === 'N') {
        remainingChecklist.push('Please provide the relevant documents ie Agents Annual Statement Interest Repairs and Maintenance Capital Improvements etc.');
        incomeChecklist.pop('Please provide the relevant documents ie Agents Annual Statement Interest Repairs and Maintenance Capital Improvements etc.');

        $('.q-9').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q-9").offset().top
        }, 1200);
        $('.q8-summary').addClass('d-none');
        $('.q8-summary-table').addClass('d-none');


    } else {
        $('.q-9').addClass('d-none');
        $('.q8-summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q8-summary").offset().top
        }, 1200);
        doneChecklist.push('Please provide the relevant documents ie Agents Annual Statement Interest Repairs and Maintenance Capital Improvements etc.');
        incomeChecklist.push('Please provide the relevant documents ie Agents Annual Statement Interest Repairs and Maintenance Capital Improvements etc.');


    }
}


function checkExpenses() {
    step(3);
    let isNewClient = document.getElementById('new_client');

    //d7 and d8 are same
    if (isNewClient.checked) {

        $('.d1').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d1").offset().top
        }, 1200);
        $('.d7').addClass('d-none');
        $('.d9').addClass('d-none');
    }
    else {
        let isQ6True = document.getElementById('yes_interest_income');
        let isQ7True = document.getElementById('yes_investment_income');
        $('.d1').addClass('d-none');
        if (isQ6True.checked || isQ7True.checked) {
            $('.d7').removeClass('d-none');
            $('.d9').addClass('d-none');
            $('html, body').animate({
                scrollTop: $(".d7").offset().top
            }, 1200);
        } else {
            $('.d9').removeClass('d-none');
            $('.d7').addClass('d-none');
            $('html, body').animate({
                scrollTop: $(".d9").offset().top
            }, 1200);
        }


    }
}

function client_sell_capital_assets(value) {

    if (value === 'N') {

        $('.q10').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q10").offset().top
        }, 1200);
        $('.q9-options,.client_asset_Property').addClass('d-none');
    } else {
        $('.q10').addClass('d-none');
        $('.q9-options').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".q9-options").offset().top
        }, 1200);


    }
}

function client_income_protection_insurance(value) {

    if (value === 'N') {

        getResult();
        $('.d13_summary').addClass('d-none');
    } else {

        $('.d13_summary').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d13_summary").offset().top
        }, 1200);

        $('.step-4').addClass('d-none');
    }
}

function client_car_usage(value) {

    if (value === 'N') {

        $('.d2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d2").offset().top
        }, 1200);
        $('.d1-q2,.d1-q3,.d1-q4,.d1-q5').addClass('d-none');
    } else {
        $('.d2').addClass('d-none');
        $('.d1-q2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d1-q2").offset().top
        }, 1200);


    }
}

function client_logbook(value) {

    if (value === 'N') {

        $('.d1-q5').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d1-q5").offset().top
        }, 1200);
        $('.d1-q3,.d1-q4').addClass('d-none');
    } else {
        $('.d1-q5,.d1-q4').addClass('d-none');
        $('.d1-q3').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".d1-q3").offset().top
        }, 1200);

        doneChecklist.push('Please provide us with a copy of your log book. Please advise your log book % of business use');
        expenseChecklist.push('Please provide us with a copy of your log book. Please advise your log book % of business use');
        motor_vehicle_expenses_table();
    }
}

let vehicleExpensesArray = ["Fuel", "Insurance", "Registration", "Repairs & Maintenance", "Interest on Loan", "Tolls", "Parking"];

function motor_vehicle_expenses_table() {
    // table-motor-vehicle-expenses
    let vehicle_table = document.getElementById('table-motor-vehicle-expenses');

    vehicle_table.innerHTML = '';

    for (let k = 0; k < 7; k++) {
        let row = document.createElement('tr');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');


        td_1.innerHTML = " <p class='tableDetails'>" + vehicleExpensesArray[k] + "<p>";
        td_2.innerHTML = " <input type=\"text\" name=\"vehicle_expense_amount\"  id=\"vehicle_expense_amount" + k + "\" class=\"form-control\" onkeyup='format(this)'>";

        row.appendChild(td_1);
        row.appendChild(td_2);


        vehicle_table.appendChild(row);
    }
}

function shares() {

    let client_asset_shares = document.getElementById('client_asset_shares');
    if (client_asset_shares.checked) {
        $('.client_asset_shares').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_asset_shares").offset().top
        }, 1200);
        doneChecklist.push('Please ensure you provide us with purchase and sale information for each share parcel sold');
        incomeChecklist.push('Please ensure you provide us with purchase and sale information for each share parcel sold');

    } else {
        $('.client_asset_shares').addClass('d-none');
    }
}

function managedFunds() {

    let client_asset_ManagedFunds = document.getElementById('client_asset_ManagedFunds');
    if (client_asset_ManagedFunds.checked) {
        doneChecklist.push('Please ensure you provide us with the annual tax statement');
        incomeChecklist.push('Please ensure you provide us with the annual tax statement');

        $('.client_asset_ManagedFunds').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_asset_ManagedFunds").offset().top
        }, 1200);
    } else {
        $('.client_asset_ManagedFunds').addClass('d-none');
    }
}

function property() {

    let client_asset_Property = document.getElementById('client_asset_Property');
    if (client_asset_Property.checked) {
        $('.client_asset_Property').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_asset_Property").offset().top
        }, 1200);
    } else {
        $('.client_asset_Property').addClass('d-none');
    }
}

function business() {
    let client_asset_Business = document.getElementById('client_asset_Business');
    if (client_asset_Business.checked) {
        doneChecklist.push('Please ensure you provide us with purchase and sale information.');
        businessChecklist.push('Please ensure you provide us with purchase and sale information.');
        $('.client_asset_Business').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".client_asset_Business").offset().top
        }, 1200);
    } else {
        $('.client_asset_Business').addClass('d-none');
    }

}

let propertyArray = ["Address", "Number of weeks rented?", "Rent Income", "Expenses:", "Body Corporate", "Cleaning", "Council Rates", "Gardening", "Insurance", "Interest on Loans", "Land Tax", "Pest Control", "Property Agent Fees", "Repairs & Maintenance", "Stationery, Telephone, Postage", "Water", "Other sundry expenses"];

function client_rental_properties_amount(value) {


    $('html, body').animate({
        scrollTop: $(".q8-summary-table").removeClass('d-none').offset().top
    }, 1200);

    let thead = document.getElementById('table-properties-head');
    let tbody = document.getElementById('table-properties');

    thead.innerHTML = '';
    tbody.innerHTML = '';


    let row = document.createElement('tr');

    for (let l = 1; l <= value; l++) {

        if (l < 2) {
            let th = document.createElement('th');
            th.innerHTML = 'Details';
            row.appendChild(th);
        }

        let th = document.createElement('th');
        th.innerHTML = 'Property' + l;

        row.appendChild(th);
    }
    thead.appendChild(row);

    for (let k = 0; k < propertyArray.length; k++) {
        let row2 = document.createElement('tr');
        let td = document.createElement('td');
        // td.innerHTML = " <input type=\"text\" name=\"property_information\" value=\"" + propertyArray[k] + "\"  id=\"property_information" + k + "\" class=\"form-control font-weight-bold\">";
        td.innerHTML = "<p class='tableDetails'>" + propertyArray[k] + "</p>";
        row2.appendChild(td);

        for (let m = 1; m <= value; m++) {
            let td1 = document.createElement('td');
            td1.innerHTML = " <input type=\"text\" name=\"property_information\" id=\"information" + k + m + "\" class=\"form-control\">";
            row2.appendChild(td1);
        }
        tbody.appendChild(row2);

    }


}
function propertiesTable() {
    for (let k = 0; k < propertyArray.length; k++) {
        let propertyValue = document.getElementById("client_rental_properties_amount").innerHTML;
        // alert(propertyValue);
        for (let m = 1; m <= propertyValue; m++) {
            // alert("farcy");
            let propertyDetails = document.getElementById("information" + k + m).value;
            // alert(propertyDetails+" final value" );
            // if (propertyDetails == "") {
            //     alert("please provide property information");
            //     return false;
            // }
        }
    }
    unhide('q-9');
}




function client_child_support(value) {

    if (value === 'N') {
        $('.childSupportDetails').addClass('d-none');
        $('.spouse').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".spouse").offset().top
        }, 1200);

    } else {
        $('.childSupportDetails').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".childSupportDetails").offset().top
        }, 1200);
        $('.spouse').addClass('d-none');
    }
}

function client_spouse(value) {

    if (value == 'Yes') {

        $('.spouseDetails').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".spouseDetails").offset().top
        }, 1200);

    } else {
        $('.step1').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".step1").offset().top
        }, 1200);
    }
}

function client_spouse_also_client(value) {

    if (value == 'Yes') {
        $('.step1').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".step1").offset().top
        }, 1200);

    } else {
        $('.step1').addClass('d-none');
        $('.spouseDetails2').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".spouseDetails2").offset().top
        }, 1200);
        $('.spouseDetails3').removeClass('d-none');
    }
}

function displayBTN() {
    $('.step1').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".step1").offset().top
    }, 1200);
}

function client_private_health_insurance(value) {

    if (value === 'N') {

        $('.studentLoan').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".studentLoan").offset().top
        }, 1200);
        $('.hospital').addClass('d-none');

    } else {
        $('.hospital').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $(".hospital").offset().top
        }, 1200);
        $('.studentLoan').addClass('d-none');

    }
}

function client_private_health_insurance_covers(value) {

    $('.studentLoan').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".studentLoan").offset().top
    }, 1200);
}

function client_student_loan(value) {

    $('.childSupport').removeClass('d-none');
    $('html, body').animate({
        scrollTop: $(".childSupport").offset().top
    }, 1200);

}

function client_spouse_full_year(value) {

    if (value === 'N') {

        $('.spouseToFrom').show();
    } else {
        $('.spouseToFrom').hide();

    }
}

function step(number) {
    // $("#step-0").hide();
    let previous = number - 1;
    $("#step-" + previous).hide();
    $('html, body').animate({
        scrollTop: $("#step-" + number).show().offset().top
    }, 1200);
    setProgressBar(number);


}

function back(number) {

    let previous = number + 1;
    $("#step-" + previous).hide();
    $('html, body').animate({
        scrollTop: $("#step-" + number).show().offset().top
    }, 1200);
    setProgressBar(number);
}




function setProgressBar(curStep) {
    var percent = parseFloat(100 / 4) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%")
}

function format(input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
}

let expensesArray = ['', 'Total Sales', '', 'Less Expenses', '', 'Purchases, materials, and supplies', 'Accounting', 'Advertising and Promotion', 'Bank Fees and Charges', 'Cartage and Freight', 'Cleaning and Rubbish Removal', 'Commission', 'Electricity', 'Fuel and Oil', 'Hire or Rent of Plant & Equipment', 'Home Office: (see below)', 'Total Hours, or', '% of expenses based on the area of home dedicated business activity', 'Expenses include:', 'Electricity', 'Gas', 'Water', 'Insurance Premiums', 'Interest Paid', 'Legal Fees', 'Maintenance', 'Motor Vehicle Expenses: (see below)', 'Total Km’s if using cents per km', 'Total Expenses if using Log Book method', ' Is you log book current and less than 5 years old?', 'What is your Log Book %?', ' If your Log Book is older than 5 years it is not valid. As such please provide km’s travelled for cents per km method to be used.', 'Postage', 'Printing and Stationery', 'Protective Clothing', 'Rates and land taxes for rented premises', 'Rent', 'Tools etc (under $300)', 'Salaries and Wages to employees', 'Superannuation', 'Subscriptions', 'Subcontractors', 'Sundry expenses', 'Telephone', ''];


function createExpenseTable() {
    let expense_table = document.getElementById('expense-table');
    expense_table.innerHTML = '';

    for (let k = 0; k < 45; k++) {
        let row = document.createElement('tr');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');


        td_1.innerHTML = " <p class='tableDetails'>" + expensesArray[k] + "</p>";
        td_2.innerHTML = " <input type=\"text\" name=\"business_expense_amount\"  id=\"business_expense_amount" + k + "\" class=\"form-control\" onkeyup='format(this)'>";

        row.appendChild(td_1);
        row.appendChild(td_2);


        expense_table.appendChild(row);
    }
}

function continue13() {
    for (let k = 0; k < 45; k++) {
        let expenceTableValue = document.getElementById("business_expense_amount" + k).value;
        if (expenceTableValue == "") {
            alert("Please provide your business expensive");
            return false;
        }
    }
    unhide('q-13_q7');

}





function createFamilyTable() {
    unhide('family-form');
    let family_table = document.getElementById('family-table');

    family_table.innerHTML = '';

    for (let k = 0; k < 4; k++) {
        let row = document.createElement('tr');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');
        let td_4 = document.createElement('td');


        td_1.innerHTML = " <input type=\"text\" name=\"client_familyMember_name\"  id=\"client_familyMember_name" + k + "\" class=\"form-control\">";
        td_2.innerHTML = " <input type=\"text\" name=\"client_familyMember_relationship\"  id=\"client_familyMember_relationship" + k + "\" class=\"form-control\">";
        td_3.innerHTML = " <input type=\"date\" name=\"client_familyMember_DOB\"  id=\"client_familyMember_DOB" + k + "\" class=\"form-control\">";
        td_4.innerHTML = "        <select name=\"client_familyMember_dependent\" class=\"form-control\" id=\"client_familyMember_dependent" + k + "\">\n" +
            "                                <option value=\"No\" selected>No</option>\n" +
            "                                <option value=\"Yes\">Yes</option>\n" +
            "                            </select> ";

        row.appendChild(td_1);
        row.appendChild(td_2);
        row.appendChild(td_3);
        row.appendChild(td_4);


        family_table.appendChild(row);
    }
}

function createBusinessTable() {
    let new_business_table = document.getElementById('new-business-table');
    new_business_table.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');

        td_1.innerHTML = " <input type=\"text\" name=\"business_description\"  id=\"business_description" + i + "\" class=\"form-control\">";
        td_2.innerHTML = " <input type=\"date\" name=\"business_purchase_date\"  id=\"business_purchase_date" + i + "\" class=\"form-control\">";
        td_3.innerHTML = " <input type=\"text\" name=\"business_purchase_amount\"  id=\"business_purchase_amount" + i + "\" class=\"form-control\" onkeyup='format(this)'>";

        row.appendChild(td_1);
        row.appendChild(td_2);
        row.appendChild(td_3);

        new_business_table.appendChild(row);
    }
}

function businessTableValidation() {
    for (let i = 0; i < 6; i++) {
        let businessDescription = document.getElementById("business_description" + i).value;
        let businessPurchaseAmount = document.getElementById("business_purchase_amount" + i).value;
        if (businessDescription == "" || businessPurchaseAmount == "") {
            alert("please provide your business details");
            return false;
        }
    }
}

function getResult() {
    $('html, body').animate({
        scrollTop: $(".step-4").removeClass('d-none').offset().top
    }, 1200);
    step(4);
    let sendData1,sendData2,sendData3,sendData4,sendData5,sendData6,sendData7=[];
    for (let f = 0; f < employmentChecklist.length; f++) {
        $("#employmentList").append('<li>' + employmentChecklist[f] + '</li>');
        sendData1.push(employmentChecklist[f]);
    }
    for (let g = 0; g < incomeChecklist.length; g++) {
        $("#incomeList").append('<li>' + incomeChecklist[g] + '</li>');
        sendData2.push(incomeChecklist[g]);
    }
    for (let h = 0; h < doneChecklist.length; h++) {
        $("#doneList").append('<li>' + doneChecklist[h] + '</li>');
        sendData3.push(doneChecklist[h]);
    }

    for (let i = 0; i < remainingChecklist.length; i++) {
        $("#remainingList").append('<li>' + remainingChecklist[i] + '</li>');
        sendData4(remainingChecklist[i]);
    }
    for (let j = 0; j < foreignIncomeChecklist.length; j++) {
        $("#foreignIncomeList").append('<li>' + foreignIncomeChecklist[j] + '</li>');
        sendData5.push(foreignIncomeChecklist[j]);
    }
    for (let k = 0; k < expenseChecklist.length; k++) {
        $("#expenseList").append('<li>' + expenseChecklist[k] + '</li>');
        sendData6.push(expenseChecklist[k]);
    }
    for (let l = 0; l < paymentChecklist.length; g++) {
        $("#paymentList").append('<li>' + paymentChecklist[l] + '</li>');
        sendData7.push(paymentChecklist[l]);
    }
    $.ajax({
        type: "POST",
        url: "./mail.php",
        data: {
            'employmentChecklist':sendData1,
            'incomeChecklist':sendData2,
            'doneChecklist':sendData3,
            'remainingChecklist':sendData4,
            'foreignIncomeChecklist':sendData5,
            'expenseChecklist':sendData6,
            'paymentChecklist':sendData7
        },
        success: function (data) {
            console.log(data);
            alert("Email has been sent successfully!");
        },
        error: function (error) {
            console.log("Error");
            console.log("Email Error!");
        },
    });




    console.log(doneChecklist);


}


// validations
function validatingInputs() {
    let numberRegex = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let clientNameValidation = /^[a-zA-Z\s\.]*$/;
    let officeNumber = document.getElementById("newClientOfficeNumber").value;
    let workNumber = document.getElementById("newClientWorkNumber").value;
    let otherNumber = document.getElementById("newClientOtherNumber").value;
    let emailValidation = document.getElementById("newClientEmail").value;
    let mobileNumberValidation = document.getElementById("newClientPhoneNumber").value;
    let clientName = document.getElementById("newClientFirstName").value;
    let clientSurname = document.getElementById("newClientSurname").value;
    // let clientPreferredName = document.getElementById("newClientPreferredName").value;
    let abnNumber = document.getElementById("newClientABN").value;
    let clientAddress = document.getElementById("newClientAddress").value;
    let clientPostalAddress = document.getElementById("newClientPostalAddress").value;
    let clientTFN = document.getElementById("newClientTFN").value;
    let clientOccupation = document.getElementById("newClientOccupation").value;
    if (clientNameValidation.test(clientName) == false) {
        alert("Incorrect first name");
        return false;
    }
    else if (clientName == "") {
        alert("please provide your name");
        return false;
    }
    else {

    }
    if (clientNameValidation.test(clientSurname) == false) {
        alert("Incorrect surname");
        return false;
    }
    else if (clientSurname == "") {
        alert("please provide your surname");
        return false;
    }
    else {
    }
    // if (clientNameValidation.test(clientPreferredName) == false) {
    //     alert("Incorrect preferred name");
    //     return false;
    // }
    // else if (clientPreferredName == "") {
    //     alert("please provide your preferred name");
    //     return false;
    // }
    // else {

    // }
    if (clientTFN == "") {
        alert("please provide your TFN");
        return false;
    }
    if (abnNumber == "") {
        alert("please provide ABN number");
        return false;
    }
    if (abnNumber <= 10000000000 || abnNumber > 99999999999) {
        alert("invalid ABN XXXXXXXXXXX");
        return false;
    }
    if (clientOccupation == "") {
        alert("please provide your Occupation");
        return false;
    }
    if (emailRegex.test(emailValidation) == true) {
    }
    else if (emailValidation == "") {
        alert("please provide your email");
        return false;
    }
    else {
        alert("invalid Email");
        return false;
    }
    if (numberRegex.test(mobileNumberValidation) == true) {
    }
    else if (mobileNumberValidation == "") {
        alert("please provide your mobile number")
        return false;
    }
    else {
        alert("Invalid mobilenumber please try this pattern '04XXXXXXXX or +612XXXXXXXX'");
        return false;
    }
    if (numberRegex.test(officeNumber) == true) {
    }
    else if (officeNumber == "") {
        alert("please provide your office number");
        return false;
    }
    else {
        alert("Invalid officenumber please try this pattern '04XXXXXXXX or +612XXXXXXXX'");
        return false;
    }
    if (numberRegex.test(workNumber) == true) {
    }
    else if (workNumber == "") {
        alert("please provide your work number");
        return false;
    }
    else {
        alert("Invalid worknumber please try this pattern '04XXXXXXXX or +612XXXXXXXX'");
        return false;
    }
    if (numberRegex.test(otherNumber) == true) {
    }
    else if (otherNumber == "") {
        alert("please provide your other number");
        return false;
    }
    else {
        alert("Invalid other number please try this pattern '04XXXXXXXX or +612XXXXXXXX'");
        return false;
    }
    if (clientAddress == "") {
        alert("please provide your address");
        return false;
    }
    if (clientPostalAddress == "") {
        alert("please provide your Postal Address");
        return false;
    }
    else {
        unhide('bank-form');
    }
}
function validatingMainName() {
    let clientNameValidation = /^[a-zA-Z\-]+/;
    let clientName1 = document.getElementById("client_name").value;
    if (clientNameValidation.test(clientName1) == true) {
    }
    else {
        alert("Incorrect Name");
        return false;
    }
}


function postCode() {
    let postCodeNumber = document.getElementById("client_postcode").value;
    let postCodeRegex = /^[0-9]{4}$/;
    if (postCodeRegex.test(postCodeNumber) == true) {
    }
    else {
        alert("Wrong post code");
        return false;
    }
}

function continue1() {
    let accountNumber = document.getElementById("newClientBankAccountNumber").value;
    let accountName = document.getElementById("newClientBankAccountName").value;
    let accountBSB = document.getElementById("newClientBankBSB").value;
    let clientNameValidation = /^[a-zA-Z\-]+/;
    if (accountNumber == "") {
        alert("please provide your account number");
        return false;
    } else if (accountName == "") {
        alert("please provide your account name");
        return false;
    }
    else if (clientNameValidation.test(accountName) == false) {
        alert("please provide correct name");
        return false;
    }
    else if (accountBSB == "") {
        alert("please provide your account BSB number");
        return false;
    }
    else {
        unhide('health-insurance');
    }
}

function continue2() {
    let nameOfFund = document.getElementById("newClientPrivateHealthInsuranceName").value;
    let memberShipNumber = document.getElementById("newClientPrivateHealthInsuranceNumber").value;
    let clientNameValidation = /^[a-zA-Z\-]+/;
    if (nameOfFund == "") {
        alert("please provide the name of fund");
        return false;
    } else if (clientNameValidation.test(nameOfFund) == false) {
        alert("please provide the correct name of fund");
        return false;
    }
    else if (memberShipNumber == "") {
        alert("please provide the membership number");
        return false;
    }
    else {
        createFamilyTable();
    }
}

function continue3() {
    let partnerShip = document.getElementById("newClientPartnershipName").value;
    let company = document.getElementById("newClientCompanyName").value;
    let trust = document.getElementById("newClientTrustName").value;
    let selfManagedSuperFund = document.getElementById("newClientSuperFundName").value;
    if (partnerShip == "") {
        alert("please provide your partnership");
        return false;
    }
    else if (company == "") {
        alert("please provide your company name");
        return false;
    }
    else if (trust == "") {
        alert("please provide your trust name");
        return false;
    }
    else if (selfManagedSuperFund == "") {
        alert("please provide your super fund");
        return false;
    }
    else {
        unhide('studentLoan');
    }
}
function continue4() {
    let streetAddress = document.getElementById("client_street_address").value;
    let clientCity = document.getElementById("client_city").value;
    let clientPostCode = document.getElementById("client_postcode").value;
    if (streetAddress == "") {
        alert("please provide your address");
        return false;
    }
    else if (clientCity == "") {
        alert("please provide your city name");
        return false;
    }
    else if (clientPostCode == "") {
        alert("please provide your post code");
        return false;
    }
    else {
        postCode();
        unhide('phone');
    }
}
function continue5() {
    let numberRegex = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let clientEmail = document.getElementById("client_email").value;
    let clientPhoneNumber = document.getElementById("client_phone").value;
    if (clientEmail == "" || clientPhoneNumber == "") {
        alert("please provide you email and phone number");
        return false;
    }
    else if (emailRegex.test(clientEmail) == false) {
        alert("Invalid email ");
        return false;
    }
    else if (numberRegex.test(clientPhoneNumber) == false) {
        alert("Invalid Phonenumber 04XXXXXXXX or +612XXXXXXXX")
        return false;
    }
    else {
        unhide('bank');
    }
}

function continue6() {
    let accountName1 = document.getElementById("client_bank_account_name").value;
    let bsbNumber = document.getElementById("client_bank_account_BSB").value;
    let accountNumber1 = document.getElementById("client_bank_account_number").value;
    let clientNameValidation = /^[a-zA-Z\-]+/;
    if (accountName1 == "") {
        alert("please provide your bank name");
        return false;
    }
    else if (clientNameValidation.test(accountName1) == false) {
        alert("please provide correct name");
        return false;
    }
    else if (bsbNumber == "") {
        alert("please provide your bsb number");
        return false;
    }
    else if (accountNumber1 == "") {
        alert("please provide your bank account number");
        return false;
    }
    else {
        unhide('health');
    }
}
function continue7() {
    let childSupportPayment = document.getElementById("client_child_support_payment").value;
    if (childSupportPayment == "") {
        alert("please provide your child Support details")
        return false;
    }
    else {
        unhide('spouse');
    }
}

function continue8() {
    let spouseNameValidation = /^[a-zA-Z\s\.]*$/;
    let spouseName = document.getElementById("client_spouse_name").value;
    let spouseTaxableIncome = document.getElementById(id = "client_spouse_taxable_income").value;
    let spouseReportableEmployment = document.getElementById("client_spouse_employer_contribution").value;
    let spouseReportableFBT = document.getElementById("client_spouse_FBT").value;
    let spouseRentalProperty = document.getElementById("client_spouse_rental_property_loss").value;
    if (spouseName == "") {
        alert("please provide your spouse name");
        return false;
    }
    else if (spouseNameValidation.test(spouseName) == false) {
        alert("Incorrect spoude name");
        return false
    }
    else if (spouseTaxableIncome == "") {
        alert("please provide your spouse's taxable income");
        return false;
    }
    else if (spouseReportableEmployment == "") {
        alert("please provide your spouse's employer");
        return false;
    }
    else if (spouseReportableFBT == "") {
        alert("please provide your spouse's FBT");
        return false;
    }
    else if (spouseRentalProperty == "") {
        alert("please provide your spouse's rental property loss");
        return false;
    }
    else {
        step(2);
    }
}

function familyDependentcontinue() {
    let familyNameValidation = /^[a-zA-Z\s\.]*$/;
    let familyMemberName1 = document.getElementById("client_familyMember_name0").value;
    let familyMemberName2 = document.getElementById("client_familyMember_name1").value;
    let familyMemberName3 = document.getElementById("client_familyMember_name2").value;
    let familyMemberName4 = document.getElementById("client_familyMember_name3").value;
    if (familyNameValidation.test(familyMemberName1) == false || familyNameValidation.test(familyMemberName2) == false || familyNameValidation.test(familyMemberName3) == false || familyNameValidation.test(familyMemberName4) == false) {
        alert("please provide correct family member name")
        return false;
    }
    else {
        unhide('related-entities-form')
    }
}

// step 2 validations
function continue9() {
    let mainOccupation = document.getElementById("client_main_occupation").value;
    if (mainOccupation == "") {
        alert("please provide your occupation");
        return false;
    }
    else {
        unhide('q1-p2');
    }
}

function continue10() {
    let oldClientMainBusiness = document.getElementById("old_client_business_activity").value;
    if (oldClientMainBusiness == "") {
        alert("please provide your old business activity");
        return false;
    }
    else {
        unhide('q-13_q4');
    }
}
function continue11() {
    let newClientMainBusiness = document.getElementById("new_client_business_activity").value;
    if (newClientMainBusiness == "") {
        alert("please provide your new business activity");
        return false;
    }
    else {
        unhide('q-13_q4');
    }
}

function continue12() {
    let furtherInfo = document.getElementById("client_other_income_details").value;
    if (furtherInfo == "") {
        alert("please provide further information");
        return false;
    }
    else {
        checkExpenses()
    }
}


function continue15() {
    let lastTaxAgent = document.getElementById("client_tax_agent_payment").value;
    if (lastTaxAgent == "") {
        alert("please provide what you gave to your previous agent");
        return false;
    }
    else {
        unhide('d12');
    }
}
function getresult1() {
    let superAnnuationClient = document.getElementById("client_income_protection_insurance_payment").value;
    if (superAnnuationClient == "") {
        alert("pleasepayments");
        return false;
    }
    else {
        getResult();
    }
}
function continue16() {
    let nameOfFund = document.getElementById("client_name_of_fund").value;
    let familyNameValidation = /^[a-zA-Z\s\.]*$/;
    let fundABN = document.getElementById("client_ABN_of_fund").value;
    let memberNumber = document.getElementById("client_memeber_number_of_fund").value;
    let amountToClaim = document.getElementById("client_claim_amount_of_fund").value;
    if (nameOfFund == "") {
        alert("please provide name of the fund");
        return false;
    }
    else if (familyNameValidation.test(nameOfFund) == false) {
        alert("please provide a correct fund name");
        return false;
    }
    if (fundABN == "") {
        alert("please provide ABN of fund");
        return false;
    }
    if (fundABN < 10000000000 || fundABN > 99999999999) {
        alert("invalid ABN number XXXXXXXXXXX");
        return false;
    }
    if (memberNumber == "") {
        alert("please provide your membership number");
        return false;
    }
    if (amountToClaim == "") {
        alert("please provide how much you want to claim");
        return false;
    }
    else {
        unhide('d13');
    }
}

function getResult2() {
    let incomeInsurancePayment = document.getElementById("client_income_protection_insurance_payment").value;
    if (incomeInsurancePayment == "") {
        alert("please provide income protection insurance paid outside of superannuation?");
        return false;
    }
    else {
        getResult();
    }
}
function logBookPercentage() {
    let clientLogBook = document.getElementById("client_logbook_business_use").value;
    if (clientLogBook == "") {
        alert("Please provide us with a copy of your logbook");
        return false;
    }
    else {
        unhide('d1-q4');
    }
}



function courseName() {
    let courseName = document.getElementById("client_course_name").value;
    if (courseName == "") {
        alert("Please provide your course name");
        return false;
    }
    else {
        unhide('d5');
    }
}

function hoursWorkHome() {
    let hoursWorkFromHome = document.getElementById("client_work_from_home_hours").value;
    if (hoursWorkFromHome == "") {
        alert("Please provide how many hours you work from home");
        return false;
    }
    else {
        unhide('d6');
    }
}

// function foreignPension(){
//     let pensionCountry=document.getElementById("client_pension_country").value;
//     let pensionType=document.getElementById("client_pension_type").value;
//     let pensionRecieved=document.getElementById("client_pension_received").value;
//     if(pensionCountry==""){
//         alert("please provide country name");
//     }
//     else if(pensionType==""){
//         alert("please provide your pension type");
//     }
//     else if(pensionRecieved==""){
//         alert("please provide your  pension ");
//     }
// }

function validateUnReImbursedExpenses() {
    let checkaccomodation = document.getElementById("client_travel_accommodation");
    let checkhiring = document.getElementById("client_travel_hiring");
    let checkmeals = document.getElementById("client_travel_meal_expenses");
    let accomodationinput = document.getElementById("client_accommodation_expense").value;
    let hiringExpense = document.getElementById("client_hiring_expense").value;
    let mealsExpense = document.getElementById("client_meals_expense").value;

    if (checkaccomodation.checked || checkhiring.checked || checkmeals.checked) {
        if (checkaccomodation.checked && accomodationinput == "") {
            alert("Please provide us accomodation charges");
            return false;
        }
        else if (checkhiring.checked && hiringExpense == "") {
            alert("Please provide us hiring charges");
            return false;
        }
        else if (checkmeals.checked && mealsExpense == "") {
            alert("Please provide us meals charges");
            return false;
        }
        else {
            unhide('d2-q3');
        }
    } else {
        unhide('d2-q3');
    }
}

