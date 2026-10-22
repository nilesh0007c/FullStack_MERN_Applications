import "./Upgradecard.css";

function UpgradeCard({
    title,
    price,
    symbolprice,
    currency,
    subtitle,
    features,
    iconsforfeatures,
    buttontext
}) {
    return (
        <div className="upgradecard">
            <h3 className="upgradecard-title">{title}</h3>
            <div className="upgradecard-price">
                <span className="upgradecard-symbol">{symbolprice}</span>&nbsp;&nbsp;
                <span className="upgradecard-amount">{price}</span>&nbsp;&nbsp;
                <span className="upgradecard-currency">{currency}</span>
            </div>
            <p className="upgradecard-subtitle">{subtitle}</p>
            <ul className="upgradecard-features">
                {features.map((feature, index) => (
                    <li key={index}>
                        {iconsforfeatures && iconsforfeatures[index] && <span className="upgradecard-icon">{iconsforfeatures[index]}</span>}
                        {feature}
                    </li>
                ))}
            </ul>
                <button className="upgradecard-button">{buttontext}</button>
        </div>
    )
}

export default UpgradeCard;