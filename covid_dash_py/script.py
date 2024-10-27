import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import dash_bootstrap_components as dbc

import plotly.express as px
import plotly.graph_objects as go

import numpy as np
import pandas as pd
import json

#    df = pd.read_csv("HIST_PAINEL_COVIDBR_2024_Parte2_05out2024.csv", sep=";")

#   df_states = df[(~df["estado"].isna()) & (df["codmun"].isna())]

#   df_brasil = df[df["regiao"] == "Brasil"]

#   df_brasil.to_csv("df_brasil.csv")

#   df_states.to_csv("df_states.csv")

df_brasil = pd.read_csv("df_brasil.csv")
df_states = pd.read_csv("df_states.csv")

df_states_ = df_states[df_states["data"] == "2024-07-01"]

brazil_states = json.load(open("brazil_geo.json", "r" ))
df_data = df_states[df_states["estado"] == "RJ"]


# =============================================
# instânciação do dash
app = dash.Dash(__name__, external_stylesheets=[dbc.themes.CYBORG])

fig = px.choropleth_mapbox(df_states,
                            locations="estado",
                              color="casosNovos",
                                center={"lat": -16.95,
                                     "lon": -47.78},
                                     zoom=4,
                                  geojson=brazil_states,
                                    color_continuous_scale="Redor",
                                      opacity=0.4,
                                        hover_data={"casosAcumulado": True, "obitosNovos": True, "estado":True}                                        
                                        )
fig.update_layout(
    mapbox_style="carto-darkmatter",
    paper_bgcolor="#242424",
    autosize=True,
    margin=go.Margin(l=0, t=0, r=0, b=0),
    showlegend=False
    )

fig2 = go.Figure(layout={"template": "plotly_dark"})

fig2.add_trace(go.Scatter(x=df_data["data"], y=df_data["casosAcumulado"]))

fig2.update_layout(
    plot_bgcolor="#242424",
    paper_bgcolor="#242424",
    autosize=True,
    margin=dict(l=10, t=10, b=10, r=10)
)

# ========================================================
# layout


app.layout = dbc.Container(
    dbc.Row([

        dbc.Col([
            html.Div([
                html.Img(id="logo", height=50),
                html.H5("Evolução COVID-19"),
                dbc.Button("BRASL", color="primary", id="location-button", size="lg")

            ], style={}),

            html.P("informe a data na qual deseja obter informações:", style={"margin-top": "40px"}),

            html.Div(id="div-teste", children= [
                dcc.DatePickerSingle(
                    id="date-picker",
                    min_date_allowed=df_brasil["data"].min(),
                    max_date_allowed=df_brasil["data"].max(),
                    initial_visible_month=df_brasil["data"].min(),
                    date=df_brasil["data"].max(),
                    display_format="MMM D, YYYY",
                    style={"border": "0px solid black"}
                )
            ]),

            dbc.Row([
                dbc.Col([
                    dbc.Card([
                        dbc.CardBody([
                            html.Span("Casos Recuperados"),
                            html.H3(style={"color": "#adfc92"}, id="casos-recperados-text"),
                            html.Span("Em acompanhamento"),
                            html.H5(id="em-acompanhamento-text"),
                        ], color="light", outline=True, style={})
                    ])
                ])
            ]),

            dcc.Graph(id="line-graph", figure=fig2)
        ]),


        dbc.Col([
            dcc.Graph(id="choropleth-map", figure=fig)
        ])
    ])
)


if __name__ == "__main__":
    app.run_server(debug=True)