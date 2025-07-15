import { useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(150);

  const parseNumber = (val) => {
    const n = parseInt(val);
    return isNaN(n) ? 0 : Math.min(Math.max(n, 10), 800);
  };

  return (
    <>
      <style>{`
        body, html, #__next {
          margin: 0; padding: 0; height: 100%;
          background-color: #111010;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          overflow: hidden;
        }
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
        }
        .inputs {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(255 255 255 / 0.05);
          padding: 12px 20px;
          border-radius: 10px;
          display: flex;
          gap: 12px;
          font-size: 14px;
          user-select: none;
        }
        .inputs label {
          display: flex;
          flex-direction: column;
          font-weight: 600;
          color: #ccc;
        }
        .inputs input {
          margin-top: 6px;
          padding: 6px 8px;
          background: transparent;
          border: 1px solid #444;
          border-radius: 6px;
          width: 70px;
          color: white;
          font-weight: 600;
          text-align: center;
          outline-offset: 2px;
          transition: border-color 0.15s ease-in-out;
        }
        .inputs input:focus {
          border-color: white;
          background-color: #222;
        }
        .box-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          user-select: none;
        }
        .box {
          position: relative;
          background: linear-gradient(135deg, #2a2a2a, #111111);
          box-shadow: 0 0 12px #00ffdd88;
          border-radius: 10px;
          border: 2px solid #00ffdd;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          color: white;
        }
        .label {
          position: absolute;
          color: white;
          font-weight: 600;
          font-size: 13px;
          user-select: none;
          pointer-events: none;
        }
        .label.top {
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
        }
        .label.bottom {
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
        }
        .label.left {
          top: 50%;
          left: -36px;
          transform: translateY(-50%);
        }
        .label.right {
          top: 50%;
          right: -36px;
          transform: translateY(-50%);
        }
      `}</style>

      <div className="container">
        <div className="box-wrapper" style={{ width: width + "px", height: height + "px" }}>
          <div className="box" style={{ width: "100%", height: "100%" }}></div>
          <div className="label top">{width}px</div>
          <div className="label bottom">{width}px</div>
          <div className="label left">{height}px</div>
          <div className="label right">{height}px</div>
        </div>

        <div className="inputs" aria-label="Dimensions inputs">
          <label>
            Width
            <input
              type="number"
              min="10"
              max="800"
              value={width}
              onChange={(e) => setWidth(parseNumber(e.target.value))}
            />
          </label>
          <label>
            Height
            <input
              type="number"
              min="10"
              max="800"
              value={height}
              onChange={(e) => setHeight(parseNumber(e.target.value))}
            />
          </label>
        </div>
      </div>
    </>
  );
}