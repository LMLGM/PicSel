import React, { Component, Fragment } from 'react'
import { Checkbox, Image, Row, Col } from 'antd'
class PictureSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            value: [],
            allChecked: false
        }
    }
    componentDidMount() {
        const { value, pictures } = this.props
        this.setState({
            allChecked: value.length === pictures.length,
            value,
            pictures
        })
    }
    onCheckAllChange = e => {
        this.setState({
            value: e.target.checked ? this.state.pictures.map(item => item.id) : [],
            allChecked: e.target.checked
        })
    };
    onChange = list => {
        this.setState({
            value: list,
            allChecked: list.length === this.state.pictures.length
        })
        this.props.onChange(list)
    };
    render() {
        const { pictures, allChecked, value } = this.state
        return (
            <Fragment>
                <div><Checkbox checked={allChecked} onChange={this.onCheckAllChange}>已选中{value.length}个</Checkbox></div>
                <div>
                    <Checkbox.Group value={value} onChange={this.onChange}>
                        <Row gutter={20}>
                            {
                                pictures && pictures.map((item, index) => {
                                    return (
                                        <Col span={8} key={item.id} className="ColStyle">
                                            <Checkbox className="check-left"
                                                value={item.id}
                                            >
                                            </Checkbox>
                                            <Image src={item.url} ></Image>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Checkbox.Group>,
                </div>


            </Fragment>
        )
    }
}
export default PictureSelect