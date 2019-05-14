import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import SingleEffect from "../SingleEffect/SingleEffect";
import "./EffectBoard.css";

import {
  growBtn,
  growBtnStyle,
  growHtmlVariable,
  growCssVariable
} from "../../effects/GrowBtn";
import {
  shrink,
  shrinkStyle,
  shrinkHtmlVariable,
  shrinkCssVariable
} from "../../effects/Shrink";
import {
  opacity,
  opacityStyle,
  opacityHtmlVariable,
  opacityCssVariable
} from "../../effects/Opacity";
import {
  rotate,
  rotateStyle,
  rotateHtmlVariable,
  rotateCssVariable
} from "../../effects/Rotate30";
import {
  squarecircle,
  squarecircleStyle,
  squarecircleHtmlVariable,
  squarecircleCssVariable
} from "../../effects/SquaretoCircle";
import {
  tdshadow,
  tdshadowStyle,
  tdshadowHtmlVariable,
  tdshadowCssVariable
} from "../../effects/3DShadow";
import {
  swing,
  swingStyle,
  swingHtmlVariable,
  swingCssVariable
} from "../../effects/Swing";

export default class EffectBoard extends Component {
  render() {
    return (
      <>
        {/* Row 1 */}
        <Row type="flex" align="middle">
          <Col xs={0} sm={0} md={6} />
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={growCssVariable}
              htmlVariable={growHtmlVariable}
              Style={growBtnStyle}
              Code={growBtn()}
              Title="Grow"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={shrinkCssVariable}
              htmlVariable={shrinkHtmlVariable}
              Style={shrinkStyle}
              Code={shrink()}
              Title="Shrink"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={opacityCssVariable}
              htmlVariable={opacityHtmlVariable}
              Style={opacityStyle}
              Code={opacity()}
              Title="Opacity"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={rotateCssVariable}
              htmlVariable={rotateHtmlVariable}
              Style={rotateStyle}
              Code={rotate()}
              Title="Rotate"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={squarecircleCssVariable}
              htmlVariable={squarecircleHtmlVariable}
              Style={squarecircleStyle}
              Code={squarecircle()}
              Title="Square to Circle"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={tdshadowCssVariable}
              htmlVariable={tdshadowHtmlVariable}
              Style={tdshadowStyle}
              Code={tdshadow()}
              Title="Shadow"
            />
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>

        {/* Row 2 */}
        <Row style={{ marginTop: "50px", marginBottom: "20px" }}>
          <Col xs={0} sm={0} md={6} />
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={swingCssVariable}
              htmlVariable={swingHtmlVariable}
              Style={swingStyle}
              Code={swing()}
              Title="Swing"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space" />
          <Col xs={24} sm={24} md={2} className="column-space" />
          <Col xs={24} sm={24} md={2} className="column-space" />
          <Col xs={24} sm={24} md={2} className="column-space" />
          <Col xs={24} sm={24} md={2} className="column-space" />
          <Col xs={0} sm={0} md={6} />
        </Row>
      </>
    );
  }
}
