# tela inicial :
    # titulo: mumzap
    # botão: iniciar chat
        # quando clicar no botão:
        # abrir um popup/modal/alerta
            # titulo: bem vindo ao mumzap
            # sumir com o titulo
            # sumir com o botão iniciar chat
                # carregar o chat
                # carregar o campo de enviar mensagem: "digite sua mensagem"
                # botão enviar
                    # quando clicar no botão ennviar
                    # enviar mensagem
                    # limpar caixa de mensagem

# flet
# importar flet
import flet as ft

# criar uma função principal para rodar o seu app
def main(pagina):
    titulo = ft.Text("MUMzap")
    pagina.add(titulo)

    titulo_popup = ft.Text("Bem vindo ao MUMzap")
    caixa_nome = ft.TextField()
    botao_popup = ft.ElevatedButton("Entrar no Chat")

    popup = ft.AlertDialog(title=titulo_popup, content=caixa_nome, actions=[botao_popup])

    def abrir_popup(evento): 
        pagina.dialog = popup
        popup.open = True
        pagina.update()
        print("Clicou no botão")
        

    botao = ft.ElevatedButton("Iniciar Chat", on_click=abrir_popup)
    pagina.add(botao)
    


# executar esta função com o flet
ft.app(main)