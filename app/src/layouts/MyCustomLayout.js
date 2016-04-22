import React from 'react';
import {Layout, Registry} from 'react-dashboard';

export default class MyCustomLayout extends Layout {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <p>Thank you for visiting the UCR Arrest Data dashboard!  The dashboard provides a more dynamic and interactive way to access UCR data, in place of static tables or reports.  The dashboard may be supplemented by reports on specific topics and a statewide summary, but will become the primary way to view and download UCR data for Wisconsin.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">{this.renderRegion(this.props.regions.filterCounty)}</div>
          <div className="col-md-4">{this.renderRegion(this.props.regions.filterYear)}</div>
        </div>
        <div className="row">
          <div className="col-md-12">{this.renderRegion(this.props.regions.top)}</div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">{this.renderRegion(this.props.regions.middleFirst)}</div>
          <div className="col-sm-6 col-lg-3">{this.renderRegion(this.props.regions.middleSecond)}</div>
          <div className="col-sm-6 col-lg-3">{this.renderRegion(this.props.regions.middleThird)}</div>
          <div className="col-sm-6 col-lg-3">{this.renderRegion(this.props.regions.middleFourth)}</div>
        </div>
        <div className="row">
          <div className="col-md-6">{this.renderRegion(this.props.regions.secondLeft)}</div>
          <div className="col-md-6">{this.renderRegion(this.props.regions.secondRight)}</div>
        </div>
        <div className="row">
          <div className="col-md-6">{this.renderRegion(this.props.regions.middleLeft)}</div>
          <div className="col-md-6">{this.renderRegion(this.props.regions.middleRight)}</div>
        </div>
        <div className="row">
          <div className="col-md-12">{this.renderRegion(this.props.regions.middle)}</div>
        </div>
      </div>
    );
  }
}

Registry.set('MyCustomLayout', MyCustomLayout);