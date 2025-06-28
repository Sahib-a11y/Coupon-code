let input  =  document.getElementById("input")
let apply = document.getElementById("aply-btn")
let total = document.getElementById("total")
let discountText = document.getElementById("dis-amt")

let totalamount = 379
let payableamount = 0
let finalAmt = 0


let coupons = [
    {name:"Welcome30", per:30},
    {name : "FirstBuy", per:5},
    {name: "FreeDelivery",per:5},
    {name: "lucky", per:40},
    {name: "Unlucky", per:50}
]


apply.addEventListener("click",function(e){
    e.preventDefault()
    let inputval = input.value.toLowerCase()
    if(inputval.length === 0){
        alert("Please write coupon code for apply!")
    }else{
        coupons.forEach(coupons => {
            if(coupons.name.toLowerCase() === inputval){
                finalAmt = answer(coupons.per)
                showDiscount(coupons.per)
            }
        });
    }
    if(finalAmt === 0){
        alert("coupon code exhausted!")
        discountText.innerHTML = 0
    }else{
        total.innerHTML = finalAmt
    }
})

function answer(per){
    let discountamout = (per*totalamount)/100
    let payableamount = totalamount-discountamout
    return payableamount
}

function showDiscount(per){
    let discountamout = (per * totalamount) / 100
    discountText.innerHTML = discountamout.toFixed(2)
}