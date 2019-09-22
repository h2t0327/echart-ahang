import React, { useState } from 'react'
import './App.css'
import Charts from 'components/echarts'
import { Upload, Icon, Button } from 'antd'
import XLSX from 'xlsx'

function App() {
  const [dataSource, setData] = useState([])
  const [name, setName] = useState('')
  const props = {
    name: 'file',
    headers: {
      authorization: 'authorization-text'
    },
    accept:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet .xlsx',
    beforeUpload: (file, fileList) => {
      setName(file.name.slice(0, -5))
      var rABS = true
      const f = fileList[0]
      var reader = new FileReader()
      reader.onload = function(e) {
        var data = e.target.result
        if (!rABS) data = new Uint8Array(data)
        var workbook = XLSX.read(data, {
          type: rABS ? 'binary' : 'array'
        })
        // 假设我们的数据在第一个标签
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // XLSX自带了一个工具把导入的数据转成json
        var jsonArr = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 })
        // 通过自定义的方法处理Json，比如加入state来展示
        jsonArr = jsonArr.slice(1)
        const dataSource = []
        for (const val of jsonArr) {
          if (val.length > 0) {
            dataSource.push({
              value: val[0],
              name: val[1]
            })
          }
        }
        setData(dataSource)
        // handleImpotedJson(jsonArr.slice(1));
      }
      if (rABS) reader.readAsBinaryString(f)
      else reader.readAsArrayBuffer(f)
      return false
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
      </header>
      <Charts type="line" data={dataSource} name={name} />
      <Charts type="bar" data={dataSource} name={name} />
      <Charts type="pie" data={dataSource} name={name} />
    </div>
  )
}

export default App
