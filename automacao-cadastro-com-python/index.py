#passo 1: entrar no sistema da empresa -> https://meus-projetos-seven.vercel.app/
# pip install pyautogui
import pyautogui
import time


# pyautogui.write -> escerver um texto
# pyautogui.click -> clicar com o mouse
# pyautogui.press -> apertar uma tecla
# pyautogui.hotkey -> apertar um atalho de teclado (ctrl, c por exemplo)

pyautogui.PAUSE = 0.5

# abrir o navegador
# apertar a tecla win
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
time.sleep(1.5)

# entrar no link
pyautogui.write("https://meus-projetos-seven.vercel.app/")
pyautogui.press("enter")

# dar uma pausa de 3 segundos
time.sleep(5)
# pyautogui.click(x=714, y=321,)

#passo 2: fazer login no sistema
# pyautogui.write("murilo@gmail.com")
# pyautogui.press("tab")
# pyautogui.write("senha")
# pyautogui.press("enter")

#passo 3: importar a baase de dados
import pandas 

tabela = pandas.read_csv("usuarios.csv")
print(tabela)

linha = 0




for linha in tabela.index:
  pyautogui.click(x=714, y=321)


  nome = tabela.loc[linha, "nome"]
  pyautogui.write(str(nome))
  pyautogui.press("tab")

  idade = tabela.loc[linha, "idade"]
  pyautogui.write(str(idade))
  pyautogui.press("tab")

  email = tabela.loc[linha, "email"]
  if not pandas.isna(email):
    pyautogui.write(str(email))
  pyautogui.press("tab")

  pyautogui.press("enter")
  pyautogui.scroll(5000)
  