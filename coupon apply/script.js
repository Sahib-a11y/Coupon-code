let input  =  document.getElementById("input")
let apply = document.getElementById("sub-btn")

let totalamount  = 20000;
let payableamount = 0;
let finalAmt = 0;

let coupons = [
    {name:"Welcome30",per:100},
    {name : "FirstBuy", per:5},
    {name: "FreeDelivery",per:5},
    {name: "lucky", per:40},
    {name: "Unlucky", per:50}
]




apply.addEventListener("click", function(e){
    e.preventDefault()
    let inputval = input.value.toLowerCase()
    if(inputval.length === 0){
        alert("Please write coupon code for apply!")
    }else{
        coupons.forEach(coupon=>{
            if(coupon.name.toLowerCase() === inputval){
                finalAmt = answer(coupon.per)
            }
        })
    }
    if(finalAmt === 0){
        alert("coupon code Exhausted!!")
    }else{
        alert("your payable amount is" + finalAmt)
    }
})

function answer(per){
    let discountamout = (per*totalamount)/100
    let payableamount = totalamount-discountamout
    return payableamount
}