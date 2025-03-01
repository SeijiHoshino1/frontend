
![1_1u2p917cvlyP6SuHcq3t0Q](https://github.com/user-attachments/assets/d3deebaf-61b4-45d0-bac7-8b5c31020541)

# Frontend

https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default


## Tags <>


### <html>

O elemento **HTML**  `<html>` representa a raiz de um HTML ou XHTML documento. Todos os outros elementos devem ser descendentes desse elemento.

### <head>

O elemento **HTML `<head>` providencia informações gerais** (metadados) sobre o documento, incluindo seu título e links para scripts e folhas de estilos.

### <body>

O **elemento** `<body>` do **HTML** representa o conteúdo de um documento HTML. É permitido apenas um `<body>` por documento.

### <h>

Os **elementos HTML** **`<h1> até <h6>`** representam seis níveis de título de seção. `<h1>` é o nível de seção mais alto e `<h6>` é o mais baixo.

### <p>

O **elemento HTML** **`<p>`** representa um parágrafo. Em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco. Já em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo, como imagens e campos de um formulário.

### <a>

O **elemento** **`<a>`** em **HTML** (ou elemento âncora), com o atributo [`href`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a#href) cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL. O conteúdo dentro de cada `<a>` **precisará** indicar o destino do link.

### <img>

O **elemento** `<img>`  representa a inserção de imagem no documento, sendo implementado também pelo HTML5 para uma melhor experiência com o elemento [`<figure>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/figure) e [`<figcaption>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/figcaption). É usado com o complemento `src` (source)

As tags de texto possuem pré configuração de quebra de texto, já as tags de links não possuem, então os links ficarão um do lado do outro por padrão. Para deixar um embaixo do outro (com quebra de texto) podemos aninhar as tags de link com tag de texto, no caso usar <a> dentro de um <p>

```html
<p>
  <a href="https://www.google.com/">Link</a>
</p>
```

## Links em imagens


```html
<a href="produtos.html">
  <img src="down2.png">
</a>
```

<aside>
💡

Tags de imagens não precisam ser fechadas

</aside>

## Lorem Ipsum


Esse site serve para pegar textos longos para fazer teste de tamanho

https://br.lipsum.com/#google_vignette

<aside>
💡

Para saber o diretório correto: CTRL + Space

- Só funciona entre aspas

```html
<a href="[CTRL + Space]">Home</a>
```

</aside>

<aside>
💡

Para navegar de um diretório para a pasta global, usa-se “../”

```html
<h1>Amazonas Market Place</h1>

    <img src="../images/magago.jpg" alt="Macaquinho" style="width: 400px;">
    <img src="../images/magago2.jpg" alt="Macaquinho" style="width: 320px;">

    <div>
        <ul>
            <li>
                <a href="../index.html">Home</a>
            </li>
            <li>
                <a href="../html/catalog.html">Catálogo</a>
            </li>
            <li>
                <a href="../html/carrinho.html">Carrinho</a>
            </li>
        </ul>
    </div>
```

</aside>

```
Favicon é o icone que fica do lado das abas, ao lado do título
Acessar via "link -> link:favicon"
```

## Links

Usados para estilização SEMPRE dentro do head
Usado para referenciar links externos