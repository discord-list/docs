import React from 'react'
import './styles.css'

export default function Table({ title, params = [] }) {
  return (
    <table>
      { title && (
        <theader>{ title }</theader>
      )}

      <tbody>
        <tr>
          <td>Parâmetro</td>
          <td>Tipo</td>
          <td>Descrição</td>
        </tr>

        { params.map((p, i) => (
          <tr key={i}>
            { p.map((p2, i) => (
              <td key={i}>
                {p2}
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  )
}
