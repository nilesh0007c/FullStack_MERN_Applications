import "./Upgradeplan.css";
import { useState } from "react";
import UpgradeCard from "./UpgrateCard"; 

/* Country-based pricing */
const pricing = {
  us: { symbol: "$", currency: "USD/month", plus: 9.99, pro: 14.99, promax: 19.99 },
  uk: { symbol: "£", currency: "GBP/month", plus: 7.99, pro: 12.99, promax: 17.99 },
  eu: { symbol: "€", currency: "EUR/month", plus: 8.99, pro: 13.99, promax: 18.99 },
  in: { symbol: "₹", currency: "INR/month", plus: 299, pro: 499, promax: 799 },
  au: { symbol: "$", currency: "AUD/month", plus: 12.99, pro: 18.99, promax: 25.99 },
  ca: { symbol: "$", currency: "CAD/month", plus: 11.99, pro: 16.99, promax: 22.99 },
  nz: { symbol: "$", currency: "NZD/month", plus: 12.49, pro: 17.99, promax: 24.99 },
  jp: { symbol: "¥", currency: "JPY/month", plus: 1200, pro: 1800, promax: 2500 },
  cn: { symbol: "¥", currency: "CNY/month", plus: 58, pro: 88, promax: 128 },
  kr: { symbol: "₩", currency: "KRW/month", plus: 11000, pro: 16000, promax: 23000 },
  sg: { symbol: "$", currency: "SGD/month", plus: 11.99, pro: 17.99, promax: 24.99 },
  hk: { symbol: "$", currency: "HKD/month", plus: 78, pro: 118, promax: 168 },
  ae: { symbol: "د.إ", currency: "AED/month", plus: 39, pro: 59, promax: 79 },
  sa: { symbol: "﷼", currency: "SAR/month", plus: 37, pro: 57, promax: 77 },
  za: { symbol: "R", currency: "ZAR/month", plus: 159, pro: 249, promax: 349 },
  ng: { symbol: "₦", currency: "NGN/month", plus: 4200, pro: 6500, promax: 9500 },
  eg: { symbol: "£", currency: "EGP/month", plus: 149, pro: 249, promax: 399 },
  ke: { symbol: "KSh", currency: "KES/month", plus: 899, pro: 1399, promax: 1999 },
  br: { symbol: "R$", currency: "BRL/month", plus: 29.99, pro: 49.99, promax: 69.99 },
  ar: { symbol: "$", currency: "ARS/month", plus: 4500, pro: 7500, promax: 10500 },
  cl: { symbol: "$", currency: "CLP/month", plus: 8900, pro: 13900, promax: 18900 },
  mx: { symbol: "$", currency: "MXN/month", plus: 169, pro: 269, promax: 369 },
  co: { symbol: "$", currency: "COP/month", plus: 35000, pro: 55000, promax: 85000 },
  pe: { symbol: "S/", currency: "PEN/month", plus: 29, pro: 49, promax: 69 },
  ru: { symbol: "₽", currency: "RUB/month", plus: 699, pro: 1099, promax: 1499 },
  tr: { symbol: "₺", currency: "TRY/month", plus: 199, pro: 299, promax: 399 },
  ua: { symbol: "₴", currency: "UAH/month", plus: 249, pro: 399, promax: 549 },
  pl: { symbol: "zł", currency: "PLN/month", plus: 29, pro: 49, promax: 69 },
  cz: { symbol: "Kč", currency: "CZK/month", plus: 189, pro: 289, promax: 389 },
  hu: { symbol: "Ft", currency: "HUF/month", plus: 2490, pro: 3990, promax: 5490 },
  se: { symbol: "kr", currency: "SEK/month", plus: 99, pro: 149, promax: 199 },
  no: { symbol: "kr", currency: "NOK/month", plus: 109, pro: 159, promax: 219 },
  dk: { symbol: "kr", currency: "DKK/month", plus: 79, pro: 119, promax: 169 },
  ch: { symbol: "CHF", currency: "CHF/month", plus: 9.49, pro: 14.49, promax: 19.49 },
  il: { symbol: "₪", currency: "ILS/month", plus: 29, pro: 49, promax: 69 },
  pk: { symbol: "₨", currency: "PKR/month", plus: 899, pro: 1499, promax: 2199 },
  bd: { symbol: "৳", currency: "BDT/month", plus: 399, pro: 699, promax: 999 },
  lk: { symbol: "Rs", currency: "LKR/month", plus: 999, pro: 1599, promax: 2299 },
  th: { symbol: "฿", currency: "THB/month", plus: 299, pro: 499, promax: 699 },
  vn: { symbol: "₫", currency: "VND/month", plus: 99000, pro: 159000, promax: 229000 },
  id: { symbol: "Rp", currency: "IDR/month", plus: 79000, pro: 129000, promax: 189000 },
  ph: { symbol: "₱", currency: "PHP/month", plus: 399, pro: 699, promax: 999 },
  my: { symbol: "RM", currency: "MYR/month", plus: 29, pro: 49, promax: 69 }
};


function Upgradeplan() {
    const [country, setCountry] = useState("us");

    const price = pricing[country];

    return (
        <div className="upgrade-container">
            {/* close tab  */}
            <span className="close-tab"><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
            <h1>Upgrade to SmartGPT</h1>
            <p>
                Unlock the full potential of SmartGPT with our Pro plan.
                Enjoy unlimited access to all features, faster response times,
                and priority support.
            </p>

            <div className="row">
                <UpgradeCard
                    title="Plus"
                    price={price.plus}
                    symbolprice={price.symbol}
                    currency={price.currency}
                    subtitle="More power for everyday users."
                    features={[
                        "Extended access to AI features",
                        "Faster response times",
                        "Email support",
                        "Higher daily limits"
                    ]}
                    iconsforfeatures={[
                        <i className="fa fa-bolt" />,
                        <i className="fa fa-tachometer" />,
                        <i className="fa fa-envelope" />,
                        <i className="fa fa-layer-group" />
                    ]}
                    buttontext="Upgrade to Plus"
                />

                <UpgradeCard
                    title="Pro"
                    price={price.pro}
                    symbolprice={price.symbol}
                    currency={price.currency}
                    subtitle="Designed for professionals and creators."
                    features={[
                        "Unlimited AI conversations",
                        "Priority response speed",
                        "Advanced tools access",
                        "Priority email support"
                    ]}
                    iconsforfeatures={[
                        <i className="fa fa-briefcase" />,
                        <i className="fa fa-rocket" />,
                        <i className="fa fa-tools" />,
                        <i className="fa fa-headset" />
                    ]}
                    buttontext="Upgrade to Pro"
                />

                <UpgradeCard
                    title="Pro Max"
                    price={price.promax}
                    symbolprice={price.symbol}
                    currency={price.currency}
                    subtitle="The ultimate AI experience for power users."
                    features={[
                        "Unlimited access to all features",
                        "Fastest response times",
                        "24/7 priority support",
                        "Early access to new features"
                    ]}
                    iconsforfeatures={[
                        <i className="fa fa-infinity" />,
                        <i className="fa fa-fighter-jet" />,
                        <i className="fa fa-headset" />,
                        <i className="fa fa-star" />
                    ]}
                    buttontext="Upgrade to Pro Max"
                />

            </div>
    <div className="selectcountry">
        <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
        >
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="eu">European Union</option>
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="nz">New Zealand</option>
            <option value="jp">Japan</option>
            <option value="cn">China</option>
            <option value="kr">South Korea</option>
            <option value="sg">Singapore</option>
            <option value="hk">Hong Kong</option>
            <option value="ae">United Arab Emirates</option>
            <option value="sa">Saudi Arabia</option>
            <option value="za">South Africa</option>
            <option value="ng">Nigeria</option>
            <option value="eg">Egypt</option>
            <option value="ke">Kenya</option>
            <option value="br">Brazil</option>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
            <option value="mx">Mexico</option>
            <option value="co">Colombia</option>
            <option value="pe">Peru</option>
            <option value="ru">Russia</option>
            <option value="tr">Turkey</option>
            <option value="ua">Ukraine</option>
            <option value="pl">Poland</option>
            <option value="cz">Czech Republic</option>
            <option value="hu">Hungary</option>
            <option value="se">Sweden</option>
            <option value="no">Norway</option>
            <option value="dk">Denmark</option>
            <option value="ch">Switzerland</option>
            <option value="il">Israel</option>
            <option value="pk">Pakistan</option>
            <option value="bd">Bangladesh</option>
            <option value="lk">Sri Lanka</option>
            <option value="th">Thailand</option>
            <option value="vn">Vietnam</option>
            <option value="id">Indonesia</option>
            <option value="ph">Philippines</option>
            <option value="my">Malaysia</option>
        </select>
    </div>
</div>
    );
}

export default Upgradeplan;
