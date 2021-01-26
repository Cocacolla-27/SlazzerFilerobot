import React, { Component } from 'react';

import { Upload, Icon } from 'antd';
import axios from 'axios';
import './custom.css';

const { Dragger } = Upload;
export default class extends Component {

render(){
    const {
		activeDrop, updateSrc
		
    } = this.props;
  
  console.log("activeDrop : ", activeDrop);
    // const { tools, closeButtonProps, noCapitalStrs } = config;
    // const isOneTool = tools.length === 1;
    // const filteredName = activeTab === 'rotate' ? 'orientation' : activeTab;
    // const onFinishButtonLabel = (!processWithCloudService && !processWithFilerobot) ? t['toolbar.download'] : t['toolbar.save'];

   	const props = {
			name: 'file',
			multiple: false,
			onChange: info => {
				
				// const isLimit = file.size / 1024 / 1024 < limit;
				// if (!isLimit) {
				// 	message.error(`Limited to ${limit}MB or less`);
				// 	return false;
				// }

				const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				const fData = new FormData();
				fData.append('source_image_file', info.file);
				fData.append('output_image_format', 'base64')	
				axios.post(
					url,
					fData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
							'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
						}
					}
				)
				.then((res) => {
          console.log("getting data  : ", res);
          activeDrop();
          updateSrc(res.data.output_image_base64);

					// fetch(res.data.output_image_base64)
					// .then(res => res.blob())
					// .then(blob => {
					// 	const nfile = new File([blob], "File name",{ type: "image/png" })
					// 	nfile.uid = uid;
					// 	onChange(nfile);
					// 	hideFlag()
					// 	console.log("nfile : ",nfile)
					// })
					
				})
				.catch(errors => console.log(errors.data));

				// const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				// const fData = new FormData();
				// const headers = {
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 		'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
				// 	}
				// };
				// const uid = info.file.uid;
				// fData.append('source_image_file', info.file);
				// // fData.append('output_image_format', 'base64')
				// axios.post(url, fData, headers)
				// .then((res) => {
				// 	console.log("getting data ->", res)
				// 	const _option = {name: 'New Image', type: "image", src: res.data.output_image_url, id: v4()};
				
				// 	canvasRef.handler.add(_option, true);		
				// 	hideFlag();			
				// })
				// .catch(errors => console.log(errors));

			},

			beforeUpload: file => {
				
				return false
			},
		};
	return (
			<div className="dragBox">
			<Dragger {...props}>
				<div className="dropImgBox">
					<div className="upload-box"><img src="assets/images/drop-image.png"/></div>
				</div>
			</Dragger>
			</div>
		);
  }
}