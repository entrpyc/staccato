function TitleText(props) {
  const { title, text, orientation, subTitle } = props
  const bgImage = `url(${props.bgImage})`;

  return (
    title && text ? 
    <section
      className={`title-text ${orientation === "ltr" ? "ltr" : "rtl"}`}
      style={{backgroundImage: `${orientation === "rtl" && bgImage}` }}
    >
      <div className="container">
        <div className={`title-text flex ${orientation === "rtl" && "row-reverse"}`}>
          <div className="title">
            <h2>{title}</h2>
            {subTitle &&
              <p className="gap-large">{subTitle}</p>
            }
          </div>
          {text}
        </div>
      </div>
    </section> : null
  );
}

export default TitleText;
