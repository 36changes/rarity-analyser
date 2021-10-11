const config = {
    app_name: 'PunkBabies Rarity',
    app_description: 'PunkBabies simple rarity tool based on Cool Rarity, an open source package for easy rarity score calculation with ERC721 NFT metadata collection. Developed by fukuball.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0xf2febe0fc74ebea939240851686d5b5455d200ab',
    collection_name: 'PunkBabies',
    collection_description: 'PunkBabies are the illegitimate offspring of the OG Punks.',
    collection_id_from: 1,
    ignore_traits: ['father','mother','shirt color rgb'], 
    sqlite_file_name: 'database.sqlite',
    ga: '',
    main_og_image: 'https://punks.baby/wp-content/uploads/2021/07/punkbabies-logo.png',
    item_path_name: 'punk',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: true
};

module.exports = config;
