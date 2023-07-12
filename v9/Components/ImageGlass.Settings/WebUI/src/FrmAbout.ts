import './main';


const onButtonClicked = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  const btnEl = e.target as HTMLButtonElement;

  post(btnEl.id);
};

query('#BtnImageGlassStore').addEventListener('click', onButtonClicked, false);
query('#BtnCheckForUpdate').addEventListener('click', onButtonClicked, false);
query('#BtnDonate').addEventListener('click', onButtonClicked, false);
query('#BtnClose').addEventListener('click', onButtonClicked, false);

query('#BtnCheckForUpdate').focus();


window._page.loadData = (data: Record<string, string> = {}) => {
  query('#Lbl_CopyrightsYear').innerText = `2010-${new Date().getUTCFullYear()}`;

  query('#Img_AppLogo').setAttribute('src', data.AppLogo || '');
  query('#Img_AppLogo').toggleAttribute('hidden', false);

  query('#Lbl_AppCode').innerText = data.AppCode || '';
  query('#Lbl_AppVersion').innerText = data.AppVersion || '';
  query('#Lbl_AppArchitecture').innerText = data.AppArchitecture || '';
  query('#Lbl_AppRuntime').innerText = data.AppRuntime || '';
};
