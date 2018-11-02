<!doctype html>
<html class="no-js" lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="icon" href="images/misc/favicon.png">
  <link rel="stylesheet" href="../css/main.css" type="text/css">
  <title>Nome do site</title>
</head>

<body>

  <!--[if lte IE 9]><div class="alert-browser"><div class="center"><div class="txt"><strong>Seu navegador está desatualizado.</strong>Para uma melhor visualização do site atualize-o ou escolha outro navegador.</div><a href="http://outdatedbrowser.com/pt-br" target="_blank">Clique aqui</a></div></div><![endif]-->

  <!-- cabeçalho -->
  <header class="header">
    <div class="container">

      <h1 class="header__logo">Nome do site</h1>

      <a href="tel:" class="header__phone">
        <svg class="icon--phone">
          <use xlink:href="images/svg/svg.svg#phone"></use>
        </svg>
        <span class="caption">Ligue agora:</span>
        <span class="number">81 9999-9999</span>
        <svg class="icon--arrow">
          <use xlink:href="images/svg/svg.svg#arrow"></use>
        </svg>
      </a>

    </div>
  </header>

  <main class="content">

    <!-- destaque -->
    <section class="featured">      

      <div class="container">
        <form action="#" method="post" class="featured__form" id="form">
          <fieldset class="row">
            <div class="col-sm-12">
              <legend class="head">Título do formulário</legend>
            </div>            
            <div class="col-sm-4 col-md-12">
              <input type="text" name="nome" id="nome" placeholder="Seu nome" class="form-control required">
            </div>
            <div class="col-sm-4 col-md-12">
              <input type="email" name="email" id="email" placeholder="Seu email" class="form-control required">
            </div>
            <div class="col-sm-4 col-md-12">
              <input type="tel" name="telefone" id="telefone" minlength="14" placeholder="Seu telefone" class="form-control telefone required">
            </div>
            <div class="col-sm-12">
              <button type="submit" class="btn">Enviar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>

    <!-- linha um  -->
    <section class="line-one">
      <div class="container">

        <h2 class="title">Título da seção</h2>
        <h3 class="subtitle">Subtitulo da seção</h3>

        <ul class="line-one__list row">

          <li class="col-sm-3">
            <div class="line-one__item">
              <img src="images/svg/phone.svg" alt="" class="line-one__icon">
              <div class="line-one__caption">
                <strong>Lorem Ipsum</strong>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>

          <li class="col-sm-3">
            <div class="line-one__item">
              <img src="images/svg/phone.svg" alt="" class="line-one__icon">
              <div class="line-one__caption">
                <strong>Lorem Ipsum</strong>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>

          <li class="col-sm-3">
            <div class="line-one__item">
              <img src="images/svg/phone.svg" alt="" class="line-one__icon">
              <div class="line-one__caption">
                <strong>Lorem Ipsum</strong>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>

          <li class="col-sm-3">
            <div class="line-one__item">
              <img src="images/svg/phone.svg" alt="" class="line-one__icon">
              <div class="line-one__caption">
                <strong>Lorem Ipsum</strong>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>

        </ul>

      </div>
    </section>

    <!-- linha dois -->
    <section class="line-two">
      <div class="container">

        <h2 class="title">Título da seção</h2>
        <h3 class="subtitle">Subtitulo da seção</h3>

        <ul class="line-two__list row">

          <li class="col-sm-6">
            <div class="line-two__item">
              <figure class="line-two__image">
                <img src="http://via.placeholder.com/600x600" alt="Imagem contem uma foto">
              </figure>
            </div>
          </li>

          <li class="col-sm-6">
            <div class="line-two__item">
              <figure class="line-two__image">
                <img src="http://via.placeholder.com/600x600" alt="Imagem contem uma foto">
              </figure>
            </div>
          </li>

        </ul>

      </div>
    </section>

    <!-- linha três -->
    <section class="line-three">
      <div class="container">

        <h2 class="title">Título da seção</h2>
        <h3 class="subtitle">Subtitulo da seção</h3>

        <div class="row">
          <div class="col-sm-6">
            <figure class="line-three__image">
              <img src="http://via.placeholder.com/600x350" alt="Imagem contem uma foto">
            </figure>
          </div>

          <div class="col-sm-6">
            <h4 class="line-three__caption">Lorem Ipsum</h4>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sint eos quibusdam reiciendis quas dolor saepe
              vitae, dolorum aut ea voluptatum, eligendi accusantium sequi vel nihil quisquam! Nam, rerum, ipsam.</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sint eos quibusdam reiciendis quas dolor saepe
              vitae, dolorum aut ea voluptatum, eligendi accusantium sequi vel nihil quisquam! Nam, rerum, ipsam.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- localização -->
    <section class="location">
      <div class="col-md-5">
        <address class="location__address">
          <h3 class="location__head">Nome do lugar</h3>
          <strong class="location__place">Estamos localizados na</strong>
           <p class="location__text">
            Lorem ipsum dolor sit amet n.999 <br>
            Lorem ipsum
           </p>
        </address>
      </div>
      <div class="col-md-7 none">
        <div class="location__mapa" id="mapa"></div>
      </div>  
    </section>

  </main>

  <footer class="footer">
    <div class="footer__copy">Copyright</div>      
  </footer>

  <script src="../js/scripts.js"></script>

</body>

</html>